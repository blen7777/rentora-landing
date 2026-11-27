import Image from 'next/image'
import { SectionHeading } from './shared'

// Reseñas que las rentadoras dejan sobre Rentora y que el SuperAdmin aprobó
// (solo las que tienen permiso del autor). Si no hay ninguna, o la API no
// responde, la sección no se muestra.

type Testimonial = {
  rating: number
  comment: string
  company_name: string | null
  country_name: string | null
  role: string | null
  first_name: string | null
  featured: boolean
}

export type TestimonialsResponse = {
  items: Testimonial[]
  total: number
  average: number | null
}

const API_URL = (process.env.RENTORA_API_URL || 'https://backend-production-3b5b.up.railway.app').replace(/\/$/, '')
const LIMIT = 6

export async function getTestimonials(): Promise<TestimonialsResponse | null> {
  try {
    const response = await fetch(`${API_URL}/api/public/platform-reviews?limit=${LIMIT}`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(4000),
    })
    if (!response.ok) return null
    const data = (await response.json()) as TestimonialsResponse
    return Array.isArray(data?.items) ? data : null
  } catch {
    return null
  }
}

// Match the public API's country name in either Spanish or English.
const countryCodesByName = new Map<string, string>()
const normalizeCountry = (name: string) =>
  name.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
for (const locale of ['es', 'en']) {
  const regions = new Intl.DisplayNames([locale], { type: 'region', fallback: 'none' })
  for (let first = 65; first <= 90; first++) {
    for (let second = 65; second <= 90; second++) {
      const code = String.fromCharCode(first, second)
      const name = regions.of(code)
      if (name) countryCodesByName.set(normalizeCountry(name), code.toLowerCase())
    }
  }
}

function CountryFlag({ country }: { country: string }) {
  const code = countryCodesByName.get(normalizeCountry(country))
  if (!code) return null

  return (
    <Image
      className="r-testimonial-flag"
      src={`https://flagcdn.com/${code}.svg`}
      alt=""
      aria-hidden="true"
      width={20}
      height={14}
      unoptimized
    />
  )
}

function Stars({ value }: { value: number }) {
  return (
    <span className="r-testimonial-stars" role="img" aria-label={`${value} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className={n <= value ? 'is-on' : ''}>
          <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8Z" />
        </svg>
      ))}
    </span>
  )
}

export const hasTestimonials = (data: TestimonialsResponse | null): data is TestimonialsResponse =>
  Boolean(data && data.items.length > 0)

export function Testimonials({ data }: { data: TestimonialsResponse | null }) {
  if (!hasTestimonials(data)) return null

  return (
    <section className="r-testimonials-section r-section" id="testimonios">
      <div className="r-container">
        <div className="r-centered-heading">
          <SectionHeading
            eyebrow="LO QUE DICEN LAS RENTADORAS"
            title={
              <>
                Rentadoras reales.
                <br />
                <span>Operación más ordenada.</span>
              </>
            }
          >
            {data.average != null && data.total > 1
              ? `${data.average.toFixed(1)} de 5 estrellas en ${data.total} reseñas de empresas que usan Rentora.`
              : 'Opiniones de empresas que ya usan Rentora todos los días.'}
          </SectionHeading>
        </div>
        <div className={`r-testimonials${data.items.length <= 2 ? ' r-testimonials-centered' : ''}`}>
          {data.items.map((item, index) => {
            const author = [item.first_name, item.role].filter(Boolean).join(' · ')
            const company = [item.company_name, item.country_name].filter(Boolean).join(' · ')
            return (
              <figure className={`r-testimonial ${item.featured ? 'r-testimonial-featured' : ''}`} key={index}>
                <Stars value={item.rating} />
                <blockquote>“{item.comment}”</blockquote>
                <figcaption>
                  {author && <strong>{author}</strong>}
                  {company && <span>{company}{item.country_name && <CountryFlag country={item.country_name} />}</span>}
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
