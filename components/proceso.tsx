import { ArrowRight } from 'lucide-react'

const STEPS = [
  {
    n: '01',
    title: 'Conversación inicial',
    text: 'Entendemos tu operación, tu mercado y tus objetivos comerciales.',
  },
  {
    n: '02',
    title: 'Estudio de generación de demanda',
    text: 'Investigamos demanda, competencia y vacíos de autoridad en tu nicho.',
  },
  {
    n: '03',
    title: 'Arquitectura y configuración',
    text: 'Convertimos los hallazgos en posicionamiento, mensajes y presencia digital.',
  },
  {
    n: '04',
    title: 'Operación y optimización',
    text: 'Ejecutamos campañas y prospección midiendo señales de demanda de forma continua.',
  },
]

export function Proceso() {
  return (
    <section className="relative bg-ink-950 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            El proceso
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl">
            Así comienza.
          </h2>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-ink-900/70 p-7">
              <span className="text-3xl font-semibold tabular-nums text-accent/90">
                {s.n}
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug text-cold">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-steel">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <a
            href="#formulario"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-600 hover:shadow-[0_12px_32px_-10px_rgba(25,195,125,0.7)]"
          >
            Solicitar diagnóstico
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
