import { rentoraFaqs } from '@/lib/rentora-seo'

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Preguntas frecuentes
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Respuestas claras sobre Rentora
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
            Información directa para entender qué hace Rentora, para quién está pensada y cómo se usa en una operación real de rent a car.
          </p>
        </div>

        <div className="mt-12 grid gap-4">
          {rentoraFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-soft dark:border-gray-700 dark:bg-surface-dark"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-gray-900 dark:text-white">
                <span>{faq.question}</span>
                <span className="text-2xl leading-none text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
