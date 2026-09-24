import { ArrowRight } from 'lucide-react'
import { BrandMark } from './brand-mark'

const LINKS = [
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Contacto', href: '#formulario' },
  { label: 'Política de privacidad', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <BrandMark />
            <p className="mt-4 text-sm leading-relaxed text-steel">
              Generación de demanda para empresas de comercio exterior.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <nav
              className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end"
              aria-label="Enlaces del pie de página"
            >
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-steel transition-colors hover:text-cold"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#formulario"
              className="group inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
            >
              Solicitar diagnóstico
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-steel/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} [Nombre de la Empresa]. Todos los derechos
            reservados.
          </p>
          <p>Estrategia · Datos · Comercio Exterior</p>
        </div>
      </div>
    </footer>
  )
}
