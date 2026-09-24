import { ArrowRight } from 'lucide-react'

const FLOW = ['Campañas', 'Contenido', 'Prospección', 'Datos', 'Optimización']

export function Metodologia() {
  return (
    <section id="metodologia" className="relative bg-ink-950 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Metodología
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl">
            De diagnóstico a generación continua de demanda.
          </h2>
          <p className="mt-4 text-lg text-steel">Un sistema en tres etapas.</p>
        </div>

        <div className="mt-14 space-y-5">
          {/* 01 ESTUDIO */}
          <article className="grid gap-8 rounded-2xl border border-white/10 bg-ink-900/60 p-8 sm:p-10 lg:grid-cols-[auto_1fr]">
            <div className="flex items-start gap-4">
              <span className="text-5xl font-semibold tabular-nums text-accent/90 sm:text-6xl">
                01
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Estudio · Producto de entrada
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-cold">
                Diagnóstico de generación de demanda
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel">
                Mapeamos qué consulta el comprador de tu nicho, analizamos entre 3 y 5
                competidores directos y detectamos vacíos de autoridad y oportunidades
                comerciales.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {[
                  'Investigación de demanda',
                  'Análisis competitivo',
                  'Mapa de oportunidades',
                  'Diagnóstico de presencia digital',
                ].map((d) => (
                  <span
                    key={d}
                    className="rounded-md border border-white/10 bg-ink-800 px-3 py-1.5 text-xs font-medium text-cold"
                  >
                    {d}
                  </span>
                ))}
              </div>
              <a
                href="#formulario"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-600"
              >
                Solicitar Estudio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>

          {/* 02 CONFIGURACIÓN */}
          <article className="grid gap-8 rounded-2xl border border-white/10 bg-ink-900/60 p-8 sm:p-10 lg:grid-cols-[auto_1fr]">
            <span className="text-5xl font-semibold tabular-nums text-steel/40 sm:text-6xl">
              02
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
                Configuración · Arquitectura de marca
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-cold">
                Convertimos los hallazgos en posicionamiento.
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel">
                Alineamos web, LinkedIn personal y empresarial, branding y mensajes
                comerciales para construir una presencia que genere confianza antes de la
                primera conversación.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {[
                  'Posicionamiento',
                  'Mensajes clave',
                  'Arquitectura de marca',
                  'Presencia digital',
                  'Comunicación B2B',
                ].map((d) => (
                  <span
                    key={d}
                    className="rounded-md border border-white/10 bg-ink-800 px-3 py-1.5 text-xs font-medium text-cold"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* 03 OPERACIÓN */}
          <article className="grid gap-8 rounded-2xl border border-white/10 bg-ink-900/60 p-8 sm:p-10 lg:grid-cols-[auto_1fr]">
            <span className="text-5xl font-semibold tabular-nums text-steel/40 sm:text-6xl">
              03
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
                Operación · Acompañamiento recurrente
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-cold">
                Generación continua de demanda.
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel">
                Ejecutamos campañas B2B, contenido especializado y prospección ABM
                mientras medimos continuamente las señales de demanda.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-2">
                {FLOW.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-md border border-accent/25 bg-accent/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-accent">
                      {step}
                    </span>
                    {i < FLOW.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-steel/50" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
