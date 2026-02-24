'use client';

const stats = [
  { value: '50+', label: 'Rentadoras confían en nosotros' },
  { value: '10K+', label: 'Facturas DTE emitidas' },
  { value: '99.9%', label: 'Disponibilidad del sistema' },
  { value: '100%', label: 'Cumplimiento normativo' },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</p>
              <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
