import { Repeat, Tag, MonitorSmartphone, Activity } from 'lucide-react'

const CARDS = [
  {
    icon: Repeat,
    title: 'Dependencia excesiva de referidos',
    text: 'El crecimiento queda atado al boca a boca y a la red de contactos, sin un canal propio y predecible.',
  },
  {
    icon: Tag,
    title: 'Competencia basada en precio',
    text: 'Cuando el mercado no percibe tu diferencia, la conversación termina reducida a la tarifa más baja.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Presencia digital que no refleja la capacidad real',
    text: 'La operación es sólida, pero la web y los perfiles no comunican ese nivel de autoridad.',
  },
  {
    icon: Activity,
    title: 'Generación de demanda poco predecible',
    text: 'Los meses buenos y malos dependen del azar, no de un sistema medible de captación.',
  },
]

export function Problema() {
  return (
    <section className="relative bg-ink-950 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            El problema
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl">
            Tu operación puede ser excelente. Si el mercado no la percibe, pierdes
            oportunidades.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-steel">
            Muchas empresas de comercio exterior tienen experiencia, infraestructura y
            capacidad operativa, pero su presencia digital no comunica ese nivel de
            autoridad.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-white/10 bg-ink-900/60 p-6 transition-colors hover:border-accent/30 hover:bg-ink-900"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-ink-800 text-steel transition-colors group-hover:border-accent/40 group-hover:text-accent">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold leading-snug text-cold">
                {c.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-steel">{c.text}</p>
            </div>
          ))}
        </div>

        <figure className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-8 sm:p-10">
          <blockquote className="text-pretty text-xl font-medium leading-snug text-cold sm:text-2xl">
            <span className="text-accent">“</span>El problema no siempre es la capacidad
            de vender. A veces es que el mercado todavía no entiende por qué debería
            elegirte.<span className="text-accent">”</span>
          </blockquote>
        </figure>
      </div>
    </section>
  )
}
