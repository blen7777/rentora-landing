import type { Metadata } from 'next'
import { DataTable, LegalPage, List } from '@/components/landing/LegalPage'
import { rentoraBrand } from '@/lib/rentora-seo'
import '../landing.css'

const pageUrl = `${rentoraBrand.siteUrl}/privacidad`

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Cómo Rentora recopila, usa, comparte y protege los datos personales en su sitio web, su plataforma para rentadoras y el portal de clientes.',
  alternates: { canonical: pageUrl },
}

const sections = [
  { id: 'resumen', title: 'I. Resumen' },
  {
    id: 'datos',
    title: 'II. Recopilación y uso de datos',
    children: [
      { id: 'datos-recopilados', title: 'A. Datos que recopilamos' },
      { id: 'uso', title: 'B. Cómo usamos los datos' },
      { id: 'cookies', title: 'C. Cookies y tecnologías similares' },
      { id: 'compartir', title: 'D. Con quién compartimos datos' },
      { id: 'conservacion', title: 'E. Conservación y eliminación' },
      { id: 'seguridad', title: 'F. Seguridad' },
    ],
  },
  { id: 'derechos', title: 'III. Tus opciones y derechos' },
  {
    id: 'legal',
    title: 'IV. Información legal',
    children: [
      { id: 'responsable', title: 'A. Responsable y contacto' },
      { id: 'bases', title: 'B. Bases para tratar los datos' },
      { id: 'transferencias', title: 'C. Transferencias internacionales' },
      { id: 'menores', title: 'D. Menores de edad' },
      { id: 'cambios', title: 'E. Cambios a esta política' },
    ],
  },
]

export default function PrivacyPage() {
  const email = (
    <a href={`mailto:${rentoraBrand.supportEmail}`}>
      {rentoraBrand.supportEmail}
    </a>
  )
  return (
    <LegalPage
      eyebrow="PRIVACIDAD"
      title="Política de privacidad"
      updatedAt="16 de octubre de 2026"
      sections={sections}
      intro={
        <p>
          Cuando una rentadora usa Rentora, nos confía la información de su
          negocio y de sus clientes. Esta política explica qué datos
          recopilamos, para qué los usamos, con quién los compartimos y qué
          opciones tienes sobre ellos.
        </p>
      }
    >
      <section id="resumen">
        <h2>I. Resumen</h2>
        <h3>Alcance</h3>
        <p>Esta política aplica cuando:</p>
        <List
          items={[
            <>
              Visitas el sitio web de Rentora, agendas una demo o nos contactas
              por WhatsApp o correo electrónico (<strong>prospectos</strong>).
            </>,
            <>
              Una empresa contrata Rentora para administrar su rent a car
              (<strong>clientes empresariales</strong> o
              &ldquo;rentadoras&rdquo;), y cuando su personal usa la plataforma
              con su propia cuenta (<strong>usuarios</strong>).
            </>,
            <>
              Una persona renta un vehículo con una rentadora que usa Rentora,
              o usa el portal de clientes de esa rentadora (
              <strong>clientes finales</strong>).
            </>,
          ]}
        />
        <h3>Dos roles distintos</h3>
        <p>
          Rentora actúa de dos maneras, según de quién sean los datos:
        </p>
        <List
          items={[
            <>
              <strong>Como responsable</strong> de los datos de prospectos,
              clientes empresariales y usuarios. Decidimos cómo se usan para
              vender, prestar y cobrar nuestro servicio.
            </>,
            <>
              <strong>Como encargado</strong> de los datos que cada rentadora
              registra sobre sus clientes, conductores, rentas, contratos e
              inspecciones. Esos datos pertenecen a la rentadora, que decide
              para qué los usa. Rentora solo los trata para prestarle el
              servicio y según sus instrucciones.
            </>,
          ]}
        />
        <p>
          Si eres cliente final de una rentadora, ella es quien debe informarte
          sobre el uso de tus datos y atender tus solicitudes en primer lugar.
          Rentora le ayudará a cumplirlas.
        </p>
      </section>

      <section id="datos">
        <h2>II. Recopilación y uso de datos</h2>
        <h3 id="datos-recopilados">A. Datos que recopilamos</h3>
        <p>Recopilamos datos de tres formas:</p>
        <ol>
          <li>Datos que tú o tu empresa nos proporcionan.</li>
          <li>Datos que las rentadoras registran en la plataforma.</li>
          <li>Datos que se generan automáticamente al usar nuestros servicios.</li>
        </ol>

        <h4>1. Datos que nos proporcionas</h4>
        <DataTable
          head={['Categoría', 'Tipos de datos']}
          rows={[
            [
              <>
                <strong>a. Contacto comercial.</strong> Cuando agendas una
                demo, nos escribes por WhatsApp o correo, o te interesas por
                un plan.
              </>,
              <List
                items={[
                  'Nombre',
                  'Nombre de la empresa',
                  'Teléfono y correo electrónico',
                  'Contenido de tus mensajes y el plan que te interesa',
                  'Fecha y hora de la demo agendada',
                ]}
              />,
            ],
            [
              <>
                <strong>b. Cuenta de empresa.</strong> Cuando una rentadora
                crea su cuenta o actualiza su configuración.
              </>,
              <List
                items={[
                  'Razón social y nombre comercial',
                  'NIT o identificación fiscal',
                  'Dirección, teléfono, correo y número de WhatsApp',
                  'País, moneda y modo fiscal',
                  'Plan contratado, sucursales y límites de uso',
                  'Nombre y correo del administrador',
                ]}
              />,
            ],
            [
              <>
                <strong>c. Usuarios de la plataforma.</strong> Cuando la
                rentadora crea cuentas para su equipo.
              </>,
              <List
                items={[
                  'Nombre y correo electrónico',
                  'Contraseña (guardada con hash, nunca en texto legible)',
                  'Rol, permisos y sucursal asignada',
                  'Configuración de verificación en dos pasos (2FA)',
                ]}
              />,
            ],
            [
              <>
                <strong>d. Integraciones.</strong> Cuando la rentadora conecta
                servicios externos.
              </>,
              <List
                items={[
                  'Credenciales del proveedor de facturación electrónica (DTE)',
                  'Configuración del proveedor de mensajería de WhatsApp',
                  'Identificador de Meta Pixel del portal, si la rentadora lo activa',
                ]}
              />,
            ],
          ]}
        />

        <h4>2. Datos que las rentadoras registran en Rentora</h4>
        <p>
          Estos datos los ingresa la rentadora, su equipo o sus clientes a
          través del portal. Rentora los trata como encargado.
        </p>
        <DataTable
          head={['Categoría', 'Tipos de datos']}
          rows={[
            [
              <>
                <strong>a. Clientes de la rentadora.</strong> Para identificar
                a quien renta y verificar que puede conducir.
              </>,
              <List
                items={[
                  'Nombre, correo, teléfono fijo y móvil, dirección',
                  'Fecha de nacimiento',
                  'Documentos de identidad: DUI, NIT, pasaporte y licencia de conducir',
                  'Fotografía',
                  'Datos laborales para clientes corporativos: empresa, cargo, departamento, número de empleado, centro de costo y supervisor',
                  'Notas internas, clientes favoritos y bloqueos (con su motivo)',
                  'Consentimiento para recibir comunicaciones de marketing',
                ]}
              />,
            ],
            [
              <>
                <strong>b. Conductores.</strong> Personas que entregan o
                recogen vehículos para la rentadora.
              </>,
              <List
                items={[
                  'Nombre, teléfono y correo',
                  'Número de licencia y fecha de vencimiento',
                  'Fotografía y vehículo asignado',
                ]}
              />,
            ],
            [
              <>
                <strong>c. Reservas y rentas.</strong> Los detalles de cada
                operación.
              </>,
              <List
                items={[
                  'Fechas y horas de salida y devolución',
                  'Vehículo, sucursal, tarifas, seguros y extras',
                  'Depósitos, anticipos, pagos, saldos y método de pago declarado',
                  'Cupones y descuentos de lealtad',
                  'Lugar de entrega y devolución, incluidas sus coordenadas cuando se usa entrega a domicilio',
                  'Número de vuelo, si se indica',
                  'Kilometraje y nivel de combustible',
                ]}
              />,
            ],
            [
              <>
                <strong>d. Contratos, firmas e inspecciones.</strong> Para
                dejar evidencia de cómo sale y vuelve cada vehículo.
              </>,
              <List
                items={[
                  'Contratos en PDF',
                  'Firma electrónica del cliente, del inspector y de la empresa (imagen de la firma)',
                  'Fecha y hora de la firma, dispositivo, navegador y datos de trazabilidad',
                  'Fotos y videos de inspección, daños y observaciones',
                  'Listas de verificación y nombre del inspector',
                ]}
              />,
            ],
            [
              <>
                <strong>e. Facturación electrónica (DTE).</strong> Cuando la
                rentadora emite un documento tributario.
              </>,
              <List
                items={[
                  'Datos del receptor: nombre, documento de identificación, correo y dirección',
                  'Montos, conceptos e impuestos',
                  'Estado de envío y respuesta del proveedor fiscal',
                ]}
              />,
            ],
            [
              <>
                <strong>f. Operación y flota.</strong> Información del negocio
                que puede incluir datos de personas.
              </>,
              <List
                items={[
                  'Incidentes y siniestros relacionados con una renta',
                  'Mantenimientos, gastos, caja y registros de combustible',
                ]}
              />,
            ],
            [
              <>
                <strong>g. Comunicaciones y calificaciones.</strong>
              </>,
              <List
                items={[
                  'Confirmaciones, recordatorios y avisos enviados por correo o WhatsApp',
                  'Calificaciones y comentarios del cliente sobre su renta',
                  'Mensajes y solicitudes de interés enviados desde el portal',
                ]}
              />,
            ],
            [
              <>
                <strong>h. Portal de clientes.</strong> Cuando un cliente final
                usa el portal de su rentadora.
              </>,
              <List
                items={[
                  'Perfil, dirección y teléfonos',
                  'Idioma preferido',
                  'Preferencias de notificación: correo, WhatsApp, recordatorios, pagos, solicitudes de calificación y marketing',
                  'Historial de reservas y documentos',
                ]}
              />,
            ],
          ]}
        />

        <h4>3. Datos que se generan al usar nuestros servicios</h4>
        <DataTable
          head={['Categoría', 'Tipos de datos']}
          rows={[
            [
              <>
                <strong>a. Actividad y auditoría.</strong> Registramos acciones
                importantes para seguridad y trazabilidad.
              </>,
              <List
                items={[
                  'Usuario que realizó la acción, fecha y hora',
                  'Tipo de acción y registro afectado',
                  'Dirección IP',
                ]}
              />,
            ],
            [
              <>
                <strong>b. Dispositivo y navegador.</strong>
              </>,
              <List
                items={[
                  'Tipo de navegador y sistema operativo',
                  'Dirección IP',
                  'Páginas visitadas y botones usados en el sitio web',
                ]}
              />,
            ],
          ]}
        />

        <h3 id="uso">B. Cómo usamos los datos</h3>
        <p>Usamos los datos para:</p>
        <ol>
          <li>
            <strong>Prestar el servicio.</strong> Crear y administrar cuentas,
            gestionar flota, reservas, rentas, contratos, inspecciones, cobros
            y reportes, y mostrar el portal de clientes de cada rentadora.
          </li>
          <li>
            <strong>Emitir documentos fiscales.</strong> Enviar los DTE al
            proveedor fiscal cuando la rentadora lo solicita o lo configura de
            forma automática.
          </li>
          <li>
            <strong>Enviar comunicaciones operativas.</strong> Confirmaciones,
            recordatorios, contratos, avisos de pago y solicitudes de
            calificación, según la configuración de la rentadora y las
            preferencias del cliente.
          </li>
          <li>
            <strong>Proteger la plataforma.</strong> Autenticar usuarios,
            aplicar permisos, registrar auditoría, detectar accesos indebidos y
            mantener respaldos.
          </li>
          <li>
            <strong>Cobrar nuestra suscripción.</strong> Calcular el plan, los
            DTE adicionales y emitir nuestra propia facturación.
          </li>
          <li>
            <strong>Dar soporte.</strong> Atender consultas, revisar errores y
            ayudar en la implementación.
          </li>
          <li>
            <strong>Mejorar Rentora.</strong> Analizar el uso de forma agregada
            para corregir fallas y desarrollar nuevas funciones.
          </li>
          <li>
            <strong>Comercializar Rentora.</strong> Contactar a prospectos y
            clientes empresariales, y medir nuestras campañas publicitarias.
          </li>
          <li>
            <strong>Cumplir la ley.</strong> Atender obligaciones legales,
            tributarias y solicitudes válidas de autoridades.
          </li>
        </ol>
        <p>
          <strong>No vendemos datos personales.</strong> Tampoco usamos los
          datos de los clientes de una rentadora para promocionar Rentora ni
          para fines propios distintos de prestar el servicio.
        </p>

        <h3 id="cookies">C. Cookies y tecnologías similares</h3>
        <List
          items={[
            <>
              <strong>Sitio web de Rentora.</strong> Usamos Meta Pixel para
              medir visitas y saber qué anuncios generan interés. Registra
              visitas a la página, clics en los botones de agendar demo,
              WhatsApp y correo, y la apertura del video demo.
            </>,
            <>
              <strong>Plataforma.</strong> Usamos almacenamiento local del
              navegador para mantener tu sesión iniciada y recordar
              preferencias, como el idioma.
            </>,
            <>
              <strong>Portal de clientes.</strong> Cada rentadora puede activar
              su propio Meta Pixel. Solo se carga si el visitante lo acepta, y
              su decisión se guarda en el navegador.
            </>,
          ]}
        />
        <p>
          Puedes bloquear o borrar cookies y el almacenamiento local desde la
          configuración de tu navegador. Si lo haces, tendrás que iniciar
          sesión de nuevo y algunas preferencias no se recordarán.
        </p>

        <h3 id="compartir">D. Con quién compartimos datos</h3>
        <p>
          Compartimos datos solo cuando es necesario para prestar el servicio,
          cuando la rentadora lo configura o cuando la ley lo exige.
        </p>
        <DataTable
          head={['Destinatario', 'Para qué']}
          rows={[
            [
              <strong>La rentadora</strong>,
              'Los datos de sus clientes, rentas y operación son suyos y están disponibles para su equipo según los permisos de cada usuario.',
            ],
            [
              <strong>Alojamiento y base de datos en la nube</strong>,
              'Para ejecutar la plataforma y guardar la información.',
            ],
            [
              <strong>Cloudflare (almacenamiento R2)</strong>,
              'Para guardar fotos, videos, documentos y respaldos cifrados.',
            ],
            [
              <strong>Resend</strong>,
              'Para enviar correos de la plataforma: accesos, contratos, recordatorios y reportes.',
            ],
            [
              <strong>Twilio y Meta (WhatsApp Business)</strong>,
              'Para enviar mensajes de WhatsApp, cuando la rentadora configura un proveedor de mensajería.',
            ],
            [
              <strong>Proveedor fiscal y Ministerio de Hacienda</strong>,
              'Para emitir y validar documentos tributarios electrónicos.',
            ],
            [
              <strong>Meta Platforms (Meta Pixel)</strong>,
              'Para medir visitas y campañas en el sitio web y, si la rentadora lo activa y el visitante lo acepta, en su portal.',
            ],
            [
              <strong>Calendly y WhatsApp</strong>,
              'Para agendar demos y conversar con prospectos.',
            ],
            [
              <strong>Autoridades</strong>,
              'Cuando lo exige una ley, una orden judicial o una solicitud válida de una autoridad competente.',
            ],
            [
              <strong>Compradores o sucesores</strong>,
              'Si Rentora participa en una fusión, venta o reorganización, con las mismas protecciones de esta política.',
            ],
          ]}
        />

        <h3 id="conservacion">E. Conservación y eliminación</h3>
        <p>
          Conservamos los datos mientras sean necesarios para los fines
          descritos en esta política.
        </p>
        <DataTable
          head={['Datos', 'Plazo de conservación']}
          rows={[
            [
              <strong>Cuenta de empresa, usuarios y datos operativos</strong>,
              'Mientras la suscripción esté activa. Al terminar, la rentadora tiene 30 días para solicitar una copia de su información; después la eliminamos de la plataforma.',
            ],
            [
              <strong>Respaldos</strong>,
              'Diarios por 7 días, semanales por 4 semanas y mensuales por 12 meses. Los datos eliminados desaparecen de los respaldos cuando estos rotan.',
            ],
            [
              <strong>Archivos eliminados (fotos, videos, documentos)</strong>,
              'Se conservan en el respaldo de archivos hasta 30 días antes de borrarse definitivamente.',
            ],
            [
              <strong>Prospectos</strong>,
              'Mientras exista interés comercial y hasta 2 años después del último contacto, salvo que pidas antes su eliminación.',
            ],
            [
              <strong>Facturación de Rentora</strong>,
              'Durante el plazo que exige la normativa tributaria.',
            ],
          ]}
        />
        <p>
          La rentadora es responsable de definir cuánto tiempo conserva los
          datos de sus clientes y de cumplir sus propias obligaciones
          tributarias y comerciales. Puede corregir o eliminar registros desde
          la plataforma, o solicitarnos ayuda.
        </p>
        <p>
          Podemos conservar datos por más tiempo cuando la ley lo exige, o
          cuando son necesarios para resolver un reclamo, una disputa, un
          incidente de seguridad o un saldo pendiente.
        </p>

        <h3 id="seguridad">F. Seguridad</h3>
        <p>Protegemos la información con medidas como:</p>
        <List
          items={[
            'Conexiones cifradas (HTTPS) entre tu navegador y la plataforma.',
            'Contraseñas guardadas con hash y verificación en dos pasos (2FA) disponible.',
            'Separación de la información de cada empresa, para que una rentadora no pueda ver datos de otra.',
            'Roles y permisos por usuario y por sucursal.',
            'Enlaces temporales para acceder a fotos, videos y documentos.',
            'Respaldos automáticos cifrados y registro de auditoría.',
          ]}
        />
        <p>
          Ningún sistema es completamente infalible. Si detectamos un incidente
          que afecte datos personales, lo notificaremos a las rentadoras
          afectadas para que puedan actuar.
        </p>
      </section>

      <section id="derechos">
        <h2>III. Tus opciones y derechos</h2>
        <p>Puedes solicitarnos:</p>
        <List
          items={[
            <>
              <strong>Acceso:</strong> saber qué datos tuyos tenemos y recibir
              una copia.
            </>,
            <>
              <strong>Rectificación:</strong> corregir datos incompletos o
              incorrectos.
            </>,
            <>
              <strong>Eliminación:</strong> borrar tus datos cuando ya no sean
              necesarios o retires tu consentimiento.
            </>,
            <>
              <strong>Oposición y limitación:</strong> que dejemos de usar tus
              datos para ciertos fines, como el marketing.
            </>,
            <>
              <strong>Portabilidad:</strong> recibir tus datos en un formato
              que puedas usar en otro servicio. Las rentadoras pueden exportar
              reportes desde la plataforma y solicitarnos una copia completa
              de su información.
            </>,
          ]}
        />
        <p>
          Escríbenos a {email} indicando tu solicitud y cómo podemos verificar
          tu identidad. Responderemos en un plazo máximo de 30 días.
        </p>
        <h3>Si eres cliente de una rentadora</h3>
        <p>
          Dirige primero tu solicitud a la rentadora con la que rentaste. Si
          nos escribes directamente, se la trasladaremos y la ayudaremos a
          responder. Desde el portal de clientes también puedes actualizar tu
          perfil y desactivar las notificaciones por correo, WhatsApp o de
          marketing.
        </p>
        <h3>Comunicaciones de marketing</h3>
        <p>
          Puedes pedirnos en cualquier momento que dejemos de enviarte
          mensajes comerciales. Seguirás recibiendo los avisos necesarios
          sobre tu cuenta.
        </p>
      </section>

      <section id="legal">
        <h2>IV. Información legal</h2>
        <h3 id="responsable">A. Responsable y contacto</h3>
        <p>
          Rentora, con domicilio en El Salvador, es responsable de los datos
          descritos en esta política cuando actúa como responsable. Para
          cualquier consulta sobre privacidad, escríbenos a {email} o al
          WhatsApp {rentoraBrand.phoneDisplay}.
        </p>
        <h3 id="bases">B. Bases para tratar los datos</h3>
        <List
          items={[
            <>
              <strong>Ejecución de un contrato:</strong> para prestar el
              servicio contratado por la rentadora.
            </>,
            <>
              <strong>Consentimiento:</strong> para comunicaciones de marketing
              y para el Meta Pixel del portal de clientes.
            </>,
            <>
              <strong>Interés legítimo:</strong> para proteger la plataforma,
              prevenir fraudes, mejorar el servicio y contactar a prospectos
              que nos escribieron.
            </>,
            <>
              <strong>Obligación legal:</strong> para cumplir normas
              tributarias y requerimientos de autoridades.
            </>,
          ]}
        />
        <p>
          Cuando actuamos como encargados, la rentadora es responsable de
          contar con una base legal para tratar los datos de sus clientes y de
          informarles sobre ello.
        </p>
        <h3 id="transferencias">C. Transferencias internacionales</h3>
        <p>
          Algunos de nuestros proveedores alojan o procesan datos fuera de El
          Salvador, principalmente en Estados Unidos. Elegimos proveedores que
          aplican medidas de seguridad y confidencialidad adecuadas.
        </p>
        <h3 id="menores">D. Menores de edad</h3>
        <p>
          Rentora es un servicio para empresas y no está dirigido a menores de
          18 años. No recopilamos de forma intencional datos de menores.
        </p>
        <h3 id="cambios">E. Cambios a esta política</h3>
        <p>
          Podemos actualizar esta política cuando cambien nuestros servicios o
          la ley. Publicaremos la nueva versión en esta página con su fecha. Si
          el cambio es importante, avisaremos a las rentadoras por correo o
          dentro de la plataforma.
        </p>
      </section>
    </LegalPage>
  )
}
