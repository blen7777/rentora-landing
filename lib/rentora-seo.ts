export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rentora-app.com'

export const rentoraBrand = {
  name: 'Rentora',
  shortName: 'Rentora',
  siteUrl: SITE_URL,
  canonicalUrl: `${SITE_URL}/`,
  supportEmail: 'hola@rentora-app.com',
}

export const rentoraSeo = {
  title: 'Rentora | Software para Rent a Car en Latinoamérica',
  description:
    'Rentora es una plataforma SaaS para empresas de renta de vehículos en Latinoamérica. Gestiona flota, reservas, clientes, contratos, pagos, reportes y facturación electrónica desde un solo sistema.',
  keywords: [
    'software rent a car',
    'software para rentadoras de vehículos',
    'plataforma SaaS para rent a car',
    'gestión de flota vehicular',
    'reservas para rentadoras',
    'facturación electrónica DTE',
    'software para rentadoras en Latinoamérica',
    'sistema para rent a car LATAM',
  ],
  openGraphTitle: 'Rentora - Software de gestión para rentadoras de vehículos',
  openGraphDescription:
    'Administra tu rent a car con Rentora: flota, reservas, clientes, contratos, reportes y facturación electrónica en una sola plataforma SaaS.',
}

export const rentoraDescription =
  'Rentora es una plataforma SaaS para empresas de renta de vehículos en Latinoamérica. Permite administrar flota, reservas, clientes, contratos, pagos, disponibilidad de vehículos, reportes y facturación electrónica desde un solo sistema.'

export const rentoraAudience = [
  'Empresas de rent a car con operación local o multi-sucursal.',
  'Agencias de alquiler de vehículos que necesitan control operativo centralizado.',
  'Negocios con flotas que buscan automatizar reservas, contratos y cobros.',
  'Equipos administrativos y operativos que necesitan reducir errores manuales.',
]

export const rentoraBenefits = [
  {
    title: 'Ahorro de tiempo',
    description: 'Centraliza tareas repetitivas para que el equipo opere más rápido y con menos fricción.',
  },
  {
    title: 'Menos errores manuales',
    description: 'Reduce duplicidad de información en reservas, contratos, pagos y facturación.',
  },
  {
    title: 'Control de flota en tiempo real',
    description: 'Visualiza disponibilidad, estado, mantenimiento y rentas activas desde un mismo panel.',
  },
  {
    title: 'Reservas centralizadas',
    description: 'Evita sobreventa y organiza cada unidad por sucursal, fecha y cliente.',
  },
  {
    title: 'Facturación DTE',
    description: 'Emite documentos tributarios electrónicos dentro del flujo operativo de la renta.',
  },
  {
    title: 'Decisiones con datos',
    description: 'Consulta reportes de ingresos, ocupación, mantenimiento y rentabilidad de la operación.',
  },
]

export const rentoraModules = [
  {
    group: 'Operación diaria',
    modules: [
      {
        name: 'Dashboard operativo',
        description: 'Resumen ejecutivo con ocupación, ingresos, alertas y actividad de la operación.',
      },
      {
        name: 'Reservaciones',
        description: 'Calendario centralizado para programar reservas, bloquear unidades y evitar conflictos.',
      },
      {
        name: 'Rentas',
        description: 'Gestiona contratos activos, entregas, cobros, extensiones y cierres de cada alquiler.',
      },
      {
        name: 'Check-in / Check-out',
        description: 'Registra condición del vehículo, combustible, kilometraje, evidencias y firma del cliente.',
      },
    ],
  },
  {
    group: 'Flota y mantenimiento',
    modules: [
      {
        name: 'Flota',
        description: 'Administra cada vehículo con datos, documentos, disponibilidad y trazabilidad completa.',
      },
      {
        name: 'Mantenimiento',
        description: 'Controla servicios preventivos, correctivos, vencimientos y costos por unidad.',
      },
      {
        name: 'Conductores',
        description: 'Centraliza licencias, validaciones, historial y asignaciones relacionadas con la renta.',
      },
    ],
  },
  {
    group: 'Clientes, finanzas y administración',
    modules: [
      {
        name: 'Clientes',
        description: 'Guarda información, documentos e historial para atender mejor a cada cliente.',
      },
      {
        name: 'Gastos',
        description: 'Registra gastos operativos por vehículo, sucursal o categoría contable.',
      },
      {
        name: 'Reportes',
        description: 'Obtén métricas de ingresos, ocupación, mantenimiento y rendimiento de flota.',
      },
      {
        name: 'Facturación electrónica DTE',
        description: 'Emite documentos tributarios electrónicos conectados al proceso de renta.',
      },
      {
        name: 'Usuarios y roles',
        description: 'Asigna permisos y mantiene trazabilidad de las acciones del equipo.',
      },
      {
        name: 'Sucursales',
        description: 'Opera múltiples ubicaciones con control de inventario y reservas por sucursal.',
      },
      {
        name: 'Portal del cliente',
        description: 'Permite a tus clientes consultar, solicitar y dar seguimiento a sus reservas.',
      },
    ],
  },
]

export const rentoraFaqs = [
  {
    question: '¿Qué es Rentora?',
    answer:
      'Rentora es una plataforma SaaS para empresas de renta de vehículos en Latinoamérica. Centraliza flota, reservas, clientes, contratos, pagos, reportes y facturación electrónica en un solo sistema.',
  },
  {
    question: '¿Para qué sirve Rentora?',
    answer:
      'Sirve para automatizar la operación diaria de una rentadora, reducir tareas manuales y tener mejor control de disponibilidad, contratos, cobros y facturación.',
  },
  {
    question: '¿Quiénes pueden usar Rentora?',
    answer:
      'Pueden usarla empresas de rent a car, agencias de alquiler de vehículos y negocios con flotas que necesiten una operación más ordenada y digital.',
  },
  {
    question: '¿Rentora sirve para empresas de rent a car?',
    answer:
      'Sí. Rentora fue diseñada específicamente para rentadoras de vehículos y para los flujos operativos más comunes de ese negocio.',
  },
  {
    question: '¿Qué módulos incluye Rentora?',
    answer:
      'Incluye dashboard operativo, reservaciones, rentas, check-in/check-out, flota, mantenimiento, clientes, conductores, gastos, reportes, facturación electrónica DTE, usuarios y roles, sucursales y portal del cliente.',
  },
  {
    question: '¿Rentora permite gestionar flota?',
    answer:
      'Sí. Puedes ver disponibilidad, estado, mantenimiento, documentos y trazabilidad de cada vehículo desde la plataforma.',
  },
  {
    question: '¿Rentora permite gestionar reservas?',
    answer:
      'Sí. Las reservas se administran de forma centralizada para evitar sobreventa y coordinar unidades, clientes y sucursales.',
  },
  {
    question: '¿Rentora incluye facturación electrónica DTE?',
    answer:
      'Sí. Rentora integra facturación electrónica DTE para acompañar el flujo de renta y facilitar el cumplimiento fiscal.',
  },
  {
    question: '¿Rentora está disponible para Latinoamérica?',
    answer:
      'Sí. Rentora nace para operar en Latinoamérica y está pensada para empresas que necesitan digitalizar su rent a car en la región.',
  },
  {
    question: '¿Cómo puedo probar Rentora?',
    answer:
      'Puedes agendar una demo gratuita o registrarte para conocer la plataforma y revisar cómo se adapta a la operación de tu empresa.',
  },
]

export const rentoraLatamMessage =
  'Rentora nace para modernizar la industria de renta de vehículos en Latinoamérica, ayudando a empresas de rent a car a digitalizar su operación, controlar su flota y crecer con procesos más ordenados.'

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: rentoraBrand.name,
    url: rentoraBrand.siteUrl,
    description: rentoraDescription,
    areaServed: 'Latinoamérica',
    email: rentoraBrand.supportEmail,
    slogan: 'Automatiza y administra tu rent a car desde una sola plataforma.',
    brand: rentoraBrand.name,
  }
}

export function buildWebSiteJsonLd(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: rentoraBrand.name,
    url: rentoraBrand.siteUrl,
    inLanguage: 'es',
    description: rentoraSeo.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${pageUrl}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildSoftwareApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: rentoraBrand.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: rentoraDescription,
    url: rentoraBrand.siteUrl,
    areaServed: 'Latinoamérica',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Empresas de rent a car y negocios con flotas',
    },
  }
}

export function buildFaqJsonLd(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: pageUrl,
    mainEntity: rentoraFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildSeoJsonLd(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationJsonLd(),
      buildWebSiteJsonLd(pageUrl),
      buildSoftwareApplicationJsonLd(),
    ],
  }
}
