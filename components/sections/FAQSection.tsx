const faqs = [
    { q: 'What industries do you specialize in?', a: 'SaaS, eCommerce, logistics, and internal enterprise tools.' },
    { q: 'How long does a project typically take?', a: 'From 2–12 weeks depending on scope and integrations.' },
    { q: 'Do you offer post-launch support?', a: 'Yes—maintenance, improvements, monitoring, and new features.' },
    { q: 'How do we get started?', a: 'Send us your brief. We reply with next steps and a proposal.' },
];

export function FAQSection() {
    return (
        <section className="py-20 border-t border-white/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-white">FAQs</h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqs.map((f) => (
                        <details
                            key={f.q}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                        >
                            <summary className="cursor-pointer list-none flex items-center justify-between text-white/80 font-medium">
                                <span>{f.q}</span>
                                <span className="text-white/40 group-open:rotate-90 transition">›</span>
                            </summary>
                            <p className="mt-3 text-sm text-white/50 leading-relaxed">{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
