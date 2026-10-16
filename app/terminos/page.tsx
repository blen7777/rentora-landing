import type { Metadata } from 'next'
import { LegalPage, List } from '@/components/landing/LegalPage'
import { rentoraBrand } from '@/lib/rentora-seo'
import '../landing.css'

const pageUrl = `${rentoraBrand.siteUrl}/terminos`

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description:
    'Condiciones de uso de Rentora, el software para empresas de rent a car: planes, pagos, facturación electrónica, datos, responsabilidades y terminación.',
  alternates: { canonical: pageUrl },
}

const sections = [
  { id: 'aceptacion', title: '1. Aceptación' },
  { id: 'definiciones', title: '2. Definiciones' },
  { id: 'servicio', title: '3. El servicio' },
  { id: 'cuentas', title: '4. Cuentas y usuarios' },
  { id: 'planes', title: '5. Planes, precios y pagos' },
  { id: 'impago', title: '6. Falta de pago y suspensión' },
  { id: 'dte', title: '7. Facturación electrónica (DTE)' },
  { id: 'mensajeria', title: '8. Mensajería y notificaciones' },
  { id: 'datos', title: '9. Datos del cliente' },
  { id: 'contratos', title: '10. Contratos de renta y firmas' },
  { id: 'uso', title: '11. Uso aceptable' },
  { id: 'propiedad', title: '12. Propiedad intelectual' },
  { id: 'disponibilidad', title: '13. Disponibilidad y soporte' },
  { id: 'responsabilidad', title: '14. Limitación de responsabilidad' },
  { id: 'indemnidad', title: '15. Indemnidad' },
  { id: 'terminacion', title: '16. Vigencia y terminación' },
  { id: 'cambios', title: '17. Cambios a estos términos' },
  { id: 'ley', title: '18. Ley aplicable' },
]

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="TÉRMINOS"
      title="Términos y condiciones"
      updatedAt="16 de octubre de 2026"
      sections={sections}
      intro={
        <p>
          Estos términos regulan el uso del sitio web de Rentora, de la
          plataforma de gestión para rentadoras y del portal de clientes.
          Léelos con atención: al contratar o usar Rentora, los aceptas.
        </p>
      }
    >
      <section id="aceptacion">
        <h2>1. Aceptación</h2>
        <p>
          Al crear una cuenta, contratar un plan o usar la plataforma, la
          empresa que contrata y cada persona que la usa en su nombre aceptan
          estos términos y la{' '}
          <a href="/privacidad">política de privacidad</a>. Quien acepta en
          nombre de una empresa declara que tiene facultades para obligarla.
        </p>
        <p>
          Si se firma un contrato o una propuesta comercial por escrito con
          Rentora, sus condiciones prevalecen sobre estos términos en lo que
          sean distintas.
        </p>
      </section>

      <section id="definiciones">
        <h2>2. Definiciones</h2>
        <List
          items={[
            <>
              <strong>Rentora</strong> o <strong>nosotros</strong>: el
              proveedor del servicio, con domicilio en El Salvador.
            </>,
            <>
              <strong>Cliente</strong> o <strong>rentadora</strong>: la empresa
              o persona que contrata Rentora para administrar su negocio de
              renta de vehículos.
            </>,
            <>
              <strong>Usuarios</strong>: las personas a quienes el cliente da
              acceso a la plataforma, como administradores, agentes o
              inspectores.
            </>,
            <>
              <strong>Clientes finales</strong>: las personas que rentan
              vehículos al cliente o usan su portal.
            </>,
            <>
              <strong>Plataforma</strong>: el software de Rentora, incluido el
              panel administrativo, el portal de clientes y sus funciones.
            </>,
            <>
              <strong>Datos del cliente</strong>: toda la información que el
              cliente, sus usuarios o sus clientes finales ingresan en la
              plataforma.
            </>,
            <>
              <strong>DTE</strong>: documento tributario electrónico.
            </>,
          ]}
        />
      </section>

      <section id="servicio">
        <h2>3. El servicio</h2>
        <p>
          Rentora es un software en la nube (SaaS) para empresas de renta de
          vehículos. Según el plan contratado, permite gestionar flota,
          reservas, rentas, clientes, contratos, inspecciones, cobros, gastos,
          sucursales, usuarios y reportes; ofrecer un portal de reservas a los
          clientes finales; y conectar servicios de facturación electrónica y
          mensajería.
        </p>
        <p>
          Rentora funciona desde el navegador y requiere conexión a internet.
          Podemos mejorar, cambiar o retirar funciones con el tiempo. Si
          retiramos una función esencial del plan contratado, avisaremos con
          anticipación razonable.
        </p>
      </section>

      <section id="cuentas">
        <h2>4. Cuentas y usuarios</h2>
        <List
          items={[
            'El cliente debe proporcionar información veraz y mantenerla actualizada.',
            'Cada usuario debe tener su propia cuenta. Las credenciales son personales y no deben compartirse.',
            'El cliente es responsable de la actividad realizada con las cuentas de sus usuarios y de asignar roles y permisos adecuados.',
            'Recomendamos activar la verificación en dos pasos (2FA) para las cuentas con más permisos.',
            'El cliente debe avisarnos de inmediato si sospecha un acceso no autorizado.',
            'Los usuarios deben ser mayores de 18 años.',
          ]}
        />
      </section>

      <section id="planes">
        <h2>5. Planes, precios y pagos</h2>
        <List
          items={[
            <>
              Los planes se cobran por mes, en dólares de los Estados Unidos
              (USD). Los precios publicados no incluyen IVA; en El Salvador se
              agrega el 13% al facturar.
            </>,
            <>
              Cada plan tiene límites de vehículos, usuarios, sucursales y DTE
              incluidos por mes, publicados en la sección de{' '}
              <a href="/#precios">planes</a> o en la propuesta comercial.
            </>,
            'Los DTE emitidos por encima de los incluidos en el plan se cobran según la tarifa por documento de cada plan.',
            'La integración de facturación electrónica tiene un costo adicional de pago único.',
            'Para superar los límites del plan, el cliente debe cambiar a un plan superior. El cambio a un plan superior aplica de inmediato; el cambio a uno inferior, a partir del siguiente ciclo.',
            'Podemos actualizar los precios avisando con al menos 30 días de anticipación. El nuevo precio aplica desde el siguiente ciclo de facturación.',
            'Los pagos no son reembolsables, incluidos los periodos usados parcialmente, salvo que la ley disponga otra cosa.',
          ]}
        />
      </section>

      <section id="impago">
        <h2>6. Falta de pago y suspensión</h2>
        <p>
          Si un pago no se recibe en la fecha de vencimiento, avisaremos al
          cliente. Si el saldo sigue pendiente, podremos restringir o suspender
          el acceso a la plataforma hasta que se regularice.
        </p>
        <p>
          Durante la suspensión conservamos los datos del cliente. Si la cuenta
          permanece suspendida por más de 60 días, podremos darla por terminada
          conforme a la sección 16.
        </p>
      </section>

      <section id="dte">
        <h2>7. Facturación electrónica (DTE)</h2>
        <List
          items={[
            'La emisión de DTE requiere que el cliente contrate o configure un proveedor fiscal autorizado y entregue sus credenciales.',
            'El cliente es responsable de la exactitud de la información fiscal que registra y de cumplir sus obligaciones tributarias.',
            'Rentora es una herramienta: no es asesor fiscal ni contable y no sustituye la revisión de un profesional.',
            'Rentora no responde por interrupciones, rechazos o demoras del proveedor fiscal o del Ministerio de Hacienda. La plataforma permite consultar el estado de cada documento y reintentar los envíos con error.',
          ]}
        />
      </section>

      <section id="mensajeria">
        <h2>8. Mensajería y notificaciones</h2>
        <p>
          Los envíos por WhatsApp requieren un proveedor de mensajería
          configurado, como Twilio o la plataforma de WhatsApp Business de
          Meta, y pueden tener costos propios de ese proveedor.
        </p>
        <p>
          El cliente es responsable del contenido de los mensajes que envía a
          sus clientes finales, de contar con su autorización para enviarlos y
          de respetar las políticas del proveedor y de WhatsApp.
        </p>
      </section>

      <section id="datos">
        <h2>9. Datos del cliente</h2>
        <List
          items={[
            'Los datos del cliente le pertenecen. Rentora los trata solo para prestar el servicio, según la política de privacidad.',
            'El cliente es responsable de tener una base legal para recopilar y tratar los datos de sus clientes finales, como documentos de identidad, licencias, fotos y firmas, y de informarles cómo los usa.',
            'El cliente autoriza a Rentora a usar proveedores de infraestructura, almacenamiento, correo y mensajería para prestar el servicio.',
            'Rentora realiza respaldos periódicos de la información. Aun así, recomendamos al cliente exportar con regularidad sus reportes más importantes.',
            'Podemos usar información estadística y anónima, que no identifica al cliente ni a las personas, para mejorar la plataforma.',
          ]}
        />
      </section>

      <section id="contratos">
        <h2>10. Contratos de renta y firmas</h2>
        <p>
          Rentora permite generar contratos, registrar inspecciones y capturar
          firmas electrónicas. El cliente define y es responsable del
          contenido de sus contratos, sus cláusulas y su validez legal.
        </p>
        <p>
          Rentora no es parte de los contratos de renta entre el cliente y sus
          clientes finales. No responde por los vehículos, su estado, daños,
          accidentes, multas, seguros, cobros o disputas que surjan de esas
          rentas.
        </p>
      </section>

      <section id="uso">
        <h2>11. Uso aceptable</h2>
        <p>El cliente y sus usuarios no deben:</p>
        <List
          items={[
            'Usar Rentora para actividades ilegales o fraudulentas.',
            'Registrar datos de personas sin autorización o con fines distintos a la operación de su negocio.',
            'Enviar spam o mensajes no autorizados a través de la plataforma.',
            'Intentar acceder a datos de otras empresas, vulnerar la seguridad o interferir con el funcionamiento del servicio.',
            'Copiar, revender, descompilar o crear productos derivados de la plataforma.',
            'Subir archivos con virus o contenido malicioso.',
          ]}
        />
        <p>
          Si detectamos un incumplimiento, podremos suspender el acceso de
          inmediato cuando sea necesario para proteger la plataforma o a
          terceros.
        </p>
      </section>

      <section id="propiedad">
        <h2>12. Propiedad intelectual</h2>
        <p>
          Rentora, su software, diseño, marca y contenidos son propiedad de
          Rentora. La suscripción otorga al cliente un derecho de uso no
          exclusivo e intransferible mientras esté vigente, y no le transfiere
          ningún derecho de propiedad.
        </p>
        <p>
          El cliente conserva los derechos sobre su marca, logotipos y
          contenidos que use en la plataforma y en su portal, y nos autoriza a
          mostrarlos para prestarle el servicio.
        </p>
      </section>

      <section id="disponibilidad">
        <h2>13. Disponibilidad y soporte</h2>
        <p>
          Hacemos esfuerzos razonables para que Rentora esté disponible en
          todo momento. Pueden ocurrir interrupciones por mantenimiento,
          actualizaciones o fallas de proveedores externos. Cuando sea posible,
          avisaremos con anticipación los mantenimientos programados.
        </p>
        <p>
          El soporte se brinda por WhatsApp al {rentoraBrand.phoneDisplay} y
          por correo a{' '}
          <a href={`mailto:${rentoraBrand.supportEmail}`}>
            {rentoraBrand.supportEmail}
          </a>
          , en horario hábil de El Salvador.
        </p>
      </section>

      <section id="responsabilidad">
        <h2>14. Limitación de responsabilidad</h2>
        <p>
          Rentora se ofrece &ldquo;tal como está&rdquo;. En la medida permitida
          por la ley:
        </p>
        <List
          items={[
            'Rentora no responde por lucro cesante, pérdida de ingresos, de clientes o de oportunidades de negocio, ni por daños indirectos.',
            'La responsabilidad total de Rentora frente al cliente se limita al monto que este pagó por el servicio en los 3 meses anteriores al hecho que originó el reclamo.',
            'Rentora no responde por fallas causadas por el cliente, sus usuarios, su conexión a internet o servicios de terceros.',
          ]}
        />
      </section>

      <section id="indemnidad">
        <h2>15. Indemnidad</h2>
        <p>
          El cliente mantendrá indemne a Rentora frente a reclamos de terceros,
          incluidos sus clientes finales o autoridades, derivados de su
          operación de renta, de sus contratos, del uso indebido de la
          plataforma o del tratamiento de datos sin la debida autorización.
        </p>
      </section>

      <section id="terminacion">
        <h2>16. Vigencia y terminación</h2>
        <List
          items={[
            'La suscripción se renueva cada mes de forma automática.',
            'El cliente puede cancelar en cualquier momento avisándonos antes del inicio del siguiente ciclo. La cancelación surte efecto al terminar el periodo pagado.',
            'Podemos terminar el servicio por incumplimiento grave de estos términos o por falta de pago, conforme a la sección 6.',
            'Al terminar, el cliente tiene 30 días para solicitarnos una copia de su información. Después la eliminaremos según la política de privacidad.',
          ]}
        />
      </section>

      <section id="cambios">
        <h2>17. Cambios a estos términos</h2>
        <p>
          Podemos actualizar estos términos. Publicaremos la nueva versión en
          esta página con su fecha y, si el cambio es importante, avisaremos a
          los clientes con al menos 15 días de anticipación. Seguir usando
          Rentora después de esa fecha implica aceptar los cambios.
        </p>
      </section>

      <section id="ley">
        <h2>18. Ley aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República de El
          Salvador. Las partes procurarán resolver cualquier diferencia de
          buena fe. Si no es posible, se someterán a los tribunales
          competentes de San Salvador.
        </p>
      </section>
    </LegalPage>
  )
}
