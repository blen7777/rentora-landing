'use server';

import { z } from 'zod';
import { db } from '@/db';
import { contactMessages } from '@/db/schema';
import { checkRateLimit } from '@/lib/rateLimit';
import { sendContactNotificationEmail, sendContactAutoReplyEmail } from '@/lib/email';

const contactSchema = z.object({
    name: z.string().min(2, 'Name is required').max(150),
    email: z.string().email('Invalid email address').max(255),
    phone: z.string().max(30).optional().or(z.literal('')),
    message: z.string().min(10, 'Message is too short').max(5000),
    honeypot: z.string().max(0, 'Bot detected').optional().default(''),
    language: z.enum(['en', 'es']).default('en'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactResponse {
    success: boolean;
    message: string;
}

export async function submitContact(formData: ContactFormData): Promise<ContactResponse> {
    try {
        const validated = contactSchema.parse(formData);

        if (validated.honeypot && validated.honeypot.length > 0) {
            return { success: false, message: 'Invalid submission detected' };
        }

        const rateLimitCheck = checkRateLimit(validated.email, {
            maxAttempts: 3,
            windowMs: 10 * 60 * 1000,
        });

        if (!rateLimitCheck.allowed) {
            const minutesRemaining = Math.ceil((rateLimitCheck.resetAt - Date.now()) / 1000 / 60);
            return {
                success: false,
                message: `Too many attempts. Please try again in ${minutesRemaining} minutes.`,
            };
        }

        await db.insert(contactMessages).values({
            name: validated.name.trim(),
            email: validated.email.toLowerCase().trim(),
            phone: validated.phone?.trim() ? validated.phone.trim() : null,
            message: validated.message.trim(),
        });

        // ✅ 1) ADMIN email: esperar para detectar fallos reales
        const adminOk = await sendContactNotificationEmail({
            name: validated.name,
            email: validated.email,
            phone: validated.phone?.trim() ? validated.phone : null,
            message: validated.message,
            language: validated.language,
        });

        // ✅ 2) Auto-reply: background (no bloquea)
        sendContactAutoReplyEmail({
            name: validated.name,
            email: validated.email,
            phone: validated.phone?.trim() ? validated.phone : null,
            message: validated.message,
            language: validated.language,
        }).catch(console.error);

        if (!adminOk) {
            return {
                success: true,
                message:
                    'Message saved, but email delivery is not configured yet (Resend "from" domain).',
            };
        }

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Error in submitContact:', error);

        if (error instanceof z.ZodError) {
            return { success: false, message: error.errors[0]?.message || 'Validation failed' };
        }

        return { success: false, message: 'An error occurred. Please try again later.' };
    }
}
