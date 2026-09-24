import { ArrowRight } from 'lucide-react'
import { TradeRoutesBg } from './trade-routes-bg'

const TRUST = ['Estrategia', 'Datos', 'Comercio Exterior', 'Generación de Demanda']

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-950 pt-24"
    >
      <TradeRoutesBg />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Generación de demanda B2B · Comercio exterior
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-cold sm:text-5xl md:text-6xl">
            Analisis y estrategias de marketing basadas {' '}
            <span className="text-accent">en Datos para Comercio Exterior</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-steel sm:text-lg">
            Combinamos conocimiento de comercio internacional, análisis de datos y
            ejecución B2B para convertir tu capacidad operativa en autoridad, demanda
            y oportunidades comerciales.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#formulario"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-600 hover:shadow-[0_12px_32px_-10px_rgba(25,195,125,0.7)]"
            >
              Solicitar diagnóstico
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#metodologia"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3.5 text-sm font-semibold text-cold transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Conocer metodología ↓
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-medium text-steel">
            {TRUST.map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-steel/50" />}
                <span className="uppercase tracking-[0.14em]">{t}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
