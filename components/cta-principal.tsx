import { ArrowRight } from 'lucide-react'

export function CtaPrincipal() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl md:text-[2.75rem]">
              ¿Tu capacidad operativa está por encima de cómo te percibe el mercado?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-steel sm:text-lg">
              Descubre qué está buscando tu comprador, cómo se está posicionando tu
              competencia y dónde existen oportunidades para generar más demanda.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="#formulario"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-600 hover:shadow-[0_16px_40px_-12px_rgba(25,195,125,0.8)]"
              >
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <p className="mt-5 text-sm text-steel/80">
              Analizamos tu mercado antes de proponerte cualquier solución.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
