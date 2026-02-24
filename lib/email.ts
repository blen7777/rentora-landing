// lib/email.ts
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function escapeHtml(value: string) {
  return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
}

type ContactEmailPayload = {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  language?: 'en' | 'es';
};

function getFrom() {
  // IMPORTANTE: este "from" debe ser un dominio verificado en Resend
  return process.env.CONTACT_FROM_EMAIL || 'Presencia Digital <no-reply@presenciadigital.com>';
}

function getTo() {
  // a dónde te llegan los leads (tu correo)
  return process.env.CONTACT_TO_EMAIL || 'info@presenciadigital.com';
}

export async function sendContactNotificationEmail(payload: ContactEmailPayload): Promise<boolean> {
  if (!resend) return false;

  const from = getFrom();
  const to = getTo();

  const safe = {
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone ?? ''),
    message: escapeHtml(payload.message),
  };

  const subject = `New Lead — ${payload.name}`;

  const html = `
  <!doctype html>
  <html>
    <body style="font-family:Inter,Arial,sans-serif;background:#050A14;color:#fff;padding:24px;">
      <div style="max-width:680px;margin:0 auto;border:1px solid rgba(255,255,255,.10);border-radius:16px;background:rgba(255,255,255,.05);padding:22px;">
        <h2 style="margin:0 0 10px 0;">New contact message</h2>
        <div style="height:1px;background:rgba(255,255,255,.10);margin:14px 0;"></div>

        <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${safe.name}</p>
        <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${safe.email}</p>
        ${safe.phone ? `<p style="margin:0 0 8px 0;"><strong>Phone:</strong> ${safe.phone}</p>` : ''}

        <p style="margin:14px 0 8px 0;"><strong>Message:</strong></p>
        <div style="white-space:pre-wrap;line-height:1.55;border:1px solid rgba(255,255,255,.10);border-radius:12px;padding:14px;background:rgba(11,19,36,.55);color:rgba(255,255,255,.85);">
${safe.message}
        </div>

        <p style="margin:16px 0 0 0;color:rgba(255,255,255,.55);font-size:12px;">
          Sent from Presencia Digital website contact form.
        </p>
      </div>
    </body>
  </html>
  `;

  try {
    await resend.emails.send({
      from,
      to,
      subject,
      html,
      reply_to: payload.email, // para responder directo al cliente
    });

    return true;
  } catch (error) {
    console.error('Resend admin email error:', error);
    return false;
  }
}

export async function sendContactAutoReplyEmail(payload: ContactEmailPayload): Promise<boolean> {
  if (!resend) return false;

  const from = getFrom();
  const lang: 'en' | 'es' = payload.language === 'es' ? 'es' : 'en';

  const title = lang === 'es' ? '¡Gracias por contactarnos!' : 'Thanks for reaching out!';
  const subject = lang === 'es'
      ? 'Hemos recibido tu mensaje — Presencia Digital'
      : 'We received your message — Presencia Digital';

  const safeName = escapeHtml(payload.name);

  const html = `
  <div style="font-family:Inter,Arial,sans-serif;background:#f6f7fb;padding:24px;">
    <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #e7e9f2;border-radius:16px;padding:22px;">
      <h2 style="margin:0 0 10px 0;">${title}</h2>
      <p style="margin:0;color:#444;">
        ${lang === 'es'
      ? `Hola ${safeName}, recibimos tu mensaje y te responderemos lo antes posible.`
      : `Hi ${safeName}, we received your message and we’ll get back to you shortly.`}
      </p>
      <p style="margin:14px 0 0 0;color:#777;font-size:12px;">
        — Presencia Digital
      </p>
    </div>
  </div>
  `;

  try {
    await resend.emails.send({
      from,
      to: payload.email,
      subject,
      html,
    });

    return true;
  } catch (error) {
    console.error('Resend auto-reply error:', error);
    return false;
  }
}
