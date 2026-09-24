import { ShieldCheck, Ship, PackageOpen } from 'lucide-react'

const CARDS = [
  {
    icon: ShieldCheck,
    title: 'Agencias de Aduanas',
    text: 'Compiten con las empresas más grandes del sector. Necesitan demostrar respaldo operativo, conocimiento y confiabilidad antes de que un importador solicite una cotización.',
  },
  {
    icon: Ship,
    title: 'Operadores Logísticos & Freight Forwarders',
    text: 'Diferencian su propuesta más allá del precio demostrando autoridad en gestión de carga, rutas complejas, coordinación internacional y agilidad documental.',
  },
  {
    icon: PackageOpen,
    title: 'Importadoras & Exportadoras',
    text: 'Empresas que necesitan fortalecer su marca para negociar con proveedores internacionales y posicionar sus líneas de producto en nuevos mercados.',
  },
]

export function Sectores() {
  return (
    <section id="sectores" className="relative bg-ink-950 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            ¿A quién servimos?
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl">
            Especialistas en empresas donde el comercio exterior es el negocio.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-ink-900/60 p-8 transition-all hover:-translate-y-1 hover:border-accent/30 hover:bg-ink-900"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-ink-800 text-accent transition-colors group-hover:border-accent/40">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold leading-snug text-cold">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-steel">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
