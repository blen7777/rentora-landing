import { ButtonLink, Icon } from './shared'
import { ProductPreview } from './ProductPreview'
import { VideoPreview } from './VideoPreview'

export function LandingHero({ videoSource = '' }: { videoSource?: string }) {
  return (
    <>
      <section className="r-hero">
        <div className="r-container r-hero-grid">
          <div className="r-hero-copy">
            <h1>
              <span className="r-hero-kicker">Software para rent a car</span>
              Tu flota en orden.
              <br />
              Tu negocio
              <br />
              <span>en movimiento.</span>
            </h1>
            <p>
              Menos pendientes. Más camino por recorrer. Gestiona tus vehículos,
              reservas y cobros desde un solo lugar, con Rentora.
            </p>
            <div className="r-hero-buttons">
              <ButtonLink>Agendar demo gratuita</ButtonLink>
              <VideoPreview source={videoSource} compact />
            </div>
            <div className="r-hero-reassurance">
              <span>
                <Icon name="check" size={15} /> Demo personalizada
              </span>
              <span>
                <Icon name="check" size={15} /> Sin compromiso
              </span>
            </div>
            <div className="r-built-for">
              <span className="r-built-icon">
                <Icon name="globe" size={20} />
              </span>
              <p>
                Hecho para rentadoras.
                <br />
                <strong>Pensado para Latinoamérica.</strong>
              </p>
            </div>
          </div>
          <ProductPreview />
        </div>
        <div className="r-hero-bottom r-container">
          <span>DE LA PRIMERA RESERVA A LA PRÓXIMA ENTREGA</span>
          <a href="#modulos">
            Descubre una forma más simple de operar <span>↓</span>
          </a>
        </div>
      </section>
      <div className="r-benefit-strip">
        <div className="r-container">
          {[
            { icon: 'car', text: 'Tu flota, siempre visible' },
            { icon: 'calendar', text: 'Reservas sin cruces' },
            { icon: 'document', text: 'Contratos en minutos' },
            { icon: 'wallet', text: 'Tus números claros' },
          ].map((item) => (
            <span key={item.text}>
              <Icon name={item.icon} size={21} />
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
