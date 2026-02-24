'use client';

import { useRef, useState } from 'react';
import { submitContact } from '@/actions/contact';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';

export function ContactForm() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const { language } = useLanguage();
    const t = translations[language];

    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [msg, setMsg] = useState<string>('');

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);
        setDone(false);
        setMsg('');

        const fd = new FormData(e.currentTarget);

        const res = await submitContact({
            name: String(fd.get('name') || ''),
            email: String(fd.get('email') || ''),
            phone: String(fd.get('phone') || ''),
            message: String(fd.get('message') || ''),
            honeypot: String(fd.get('honeypot') || ''),
            language,
        });

        setLoading(false);
        setDone(res.success);
        setMsg(res.message);

        if (res.success) {
            formRef.current?.reset();
        }
    }

    return (
        <div
            id="contact"
            className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-7"
        >
            <h3 className="text-2xl font-semibold">{t.contact_title}</h3>
            <div className="mt-4 h-px bg-white/10" />

            <form ref={formRef} onSubmit={onSubmit} className="mt-5 space-y-4">
                {/* Honeypot (hidden) */}
                <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                />

                <input
                    className="w-full h-12 rounded-lg bg-[#0B1324]/60 border border-white/10 px-4 text-white placeholder:text-white/40 outline-none focus:border-white/20"
                    placeholder={t.contact_name}
                    name="name"
                    required
                />

                <input
                    className="w-full h-12 rounded-lg bg-[#0B1324]/60 border border-white/10 px-4 text-white placeholder:text-white/40 outline-none focus:border-white/20"
                    placeholder={t.contact_email}
                    name="email"
                    type="email"
                    required
                />

                <input
                    className="w-full h-12 rounded-lg bg-[#0B1324]/60 border border-white/10 px-4 text-white placeholder:text-white/40 outline-none focus:border-white/20"
                    placeholder={t.contact_phone}
                    name="phone"
                />

                <textarea
                    className="w-full min-h-[120px] rounded-lg bg-[#0B1324]/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/20 resize-none"
                    placeholder={t.contact_message}
                    name="message"
                    required
                />

                <button
                    disabled={loading}
                    className="w-full h-12 rounded-lg bg-[#00B4C4] text-white font-semibold hover:opacity-95 transition disabled:opacity-60"
                >
                    {loading ? t.contact_sending : t.contact_send}
                </button>

                {!!msg && (
                    <p className={`text-sm text-center pt-1 ${done ? 'text-[#00B4C4]' : 'text-red-300'}`}>
                        {msg}
                    </p>
                )}
            </form>
        </div>
    );
}
