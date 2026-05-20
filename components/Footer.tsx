import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/85 text-center sm:text-left">
            © {new Date().getFullYear()} Rentora. Software SaaS para rentadoras de vehículos en Latinoamérica.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <Link href="/que-es-rentora" className="transition hover:text-white">
              ¿Qué es Rentora?
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=61588286986919"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
