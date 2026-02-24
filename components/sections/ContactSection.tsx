import { ContactForm } from '@/components/ContactForm';

export function ContactSection() {
    return (
        <section id="contact" className="py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white">Ready to Start Your Project?</h2>
                    <p className="mt-4 text-white/55 leading-relaxed max-w-lg">
                        Tell us about your idea. We’ll respond within 24 hours with the next steps.
                    </p>

                    <div className="mt-8 space-y-3 text-sm text-white/55">
                        <p>• Web Apps • Mobile Apps • APIs • Integrations</p>
                        <p>• Cloud & DevOps • UI/UX • Performance</p>
                    </div>
                </div>

                <ContactForm />
            </div>
        </section>
    );
}
