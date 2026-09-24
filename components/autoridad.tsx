import { Plus } from 'lucide-react'

const DISCIPLINES = [
  'Relaciones Internacionales',
  'Negocios Internacionales',
  'Análisis de Datos',
  'Generación de Demanda B2B',
]

const TAGS = ['Aranceles', 'Incoterms', 'DIAN', 'Logística', 'Geopolítica', 'Datos']

export function Autoridad() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Autoridad
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl">
              No venimos solo del marketing.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-steel">
              Entender el contexto internacional cambia la forma de construir una
              estrategia comercial.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-ink-950/50 p-6 sm:p-8">
            <div className="flex flex-col gap-3">
              {DISCIPLINES.map((d, i) => (
                <div key={d}>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink-800 px-5 py-4">
                    <span className="text-sm font-semibold uppercase tracking-wide text-cold sm:text-base">
                      {d}
                    </span>
                    <span className="text-[11px] font-medium tabular-nums text-steel/60">
                      0{i + 1}
                    </span>
                  </div>
                  {i < DISCIPLINES.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                        <Plus className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
