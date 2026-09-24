import { Check, Minus } from 'lucide-react'

const TRADITIONAL = [
  'Métricas superficiales',
  'Contenido genérico',
  'Campañas sin contexto',
  'Competencia por precio',
]

const SPECIALIZED = [
  'Comercio exterior',
  'Datos',
  'Investigación de demanda',
  'Análisis competitivo',
  'Autoridad sectorial',
  'Prospección B2B',
]

export function Diferencial() {
  return (
    <section id="diferencial" className="relative bg-ink-900 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            El diferencial
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl">
            Marketing con conocimiento del negocio, no solo de los clics.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Tradicional */}
          <div className="rounded-2xl border border-white/10 bg-ink-950/40 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-steel">
              Marketing tradicional
            </p>
            <ul className="mt-7 space-y-4">
              {TRADITIONAL.map((t) => (
                <li key={t} className="flex items-center gap-3 text-steel">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 text-steel/70">
                    <Minus className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Especializada */}
          <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-ink-800 to-ink-950 p-8 shadow-[0_24px_60px_-30px_rgba(25,195,125,0.5)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                Generación de demanda especializada
              </span>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {SPECIALIZED.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-cold">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-ink-950">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
