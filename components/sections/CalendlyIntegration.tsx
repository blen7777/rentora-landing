'use client';

import { useEffect } from 'react';

// ============================================================
// OPCIÓN 1: Popup de Calendly (recomendada)
// Uso: <CalendlyButton url="https://calendly.com/tu-usuario/demo" />
// ============================================================

interface CalendlyButtonProps {
  url: string;
  label?: string;
  className?: string;
}

export function CalendlyButton({
  url,
  label = 'Agendar Demo Gratuita',
  className = '',
}: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded dynamically
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback: open in new tab
      window.open(url, '_blank');
    }
  };

  return (
    <button
      onClick={openCalendly}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 ${className}`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {label}
    </button>
  );
}

// ============================================================
// OPCIÓN 2: Widget embebido inline
// Uso: <CalendlyInline url="https://calendly.com/tu-usuario/demo" />
// ============================================================

interface CalendlyInlineProps {
  url: string;
  height?: number;
}

export function CalendlyInline({ url, height = 700 }: CalendlyInlineProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url={url}
      style={{ minWidth: '320px', height: `${height}px` }}
    />
  );
}

// ============================================================
// OPCIÓN 3: Sección de demo completa con widget embebido
// ============================================================

interface DemoSectionProps {
  calendlyUrl: string;
}

export function DemoSection({ calendlyUrl }: DemoSectionProps) {
  return (
    <section id="demo" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Demo gratuita</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Agenda una demostración personalizada
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Te mostramos cómo nuestra plataforma puede transformar la gestión de tu rentadora. La demo dura 30 minutos y es completamente gratuita.
            </p>

            <div className="space-y-5">
              {[
                { icon: '✅', title: 'Sin compromiso', desc: 'La demo es gratuita y sin obligación de compra.' },
                { icon: '⏱️', title: '30 minutos', desc: 'Sesión enfocada en tus necesidades específicas.' },
                { icon: '🎯', title: 'Personalizada', desc: 'Te mostramos las funciones relevantes para tu negocio.' },
                { icon: '🤝', title: 'Con un experto', desc: 'Un especialista te guiará en todo momento.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calendly widget */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-blue-600 px-6 py-4">
              <p className="text-white font-bold text-lg">📅 Elige tu horario</p>
              <p className="text-blue-200 text-sm">Selecciona el día y hora que mejor te convenga</p>
            </div>
            <CalendlyInline url={calendlyUrl} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
}
