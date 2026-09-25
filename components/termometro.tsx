'use client'

import { useState } from 'react'
import {
  TrendingUp,
  Radar,
  Building2,
  Target,
  Zap,
  ArrowRight,
} from 'lucide-react'

/* =========================================================
   TIPOS
========================================================= */

type Sector = 'aduanas' | 'logistica' | 'importador'

type ResultLevel = 'bajo' | 'medio' | 'alto'

interface Result {
  level: ResultLevel
  title: string
  message: string
}

/* =========================================================
   DATOS DEL SIMULADOR
========================================================= */

const SECTOR_OPTIONS = [
  {
    value: 'aduanas' as Sector,
    label: 'Agencia de Aduanas / Representación Aduanera',
  },
  {
    value: 'logistica' as Sector,
    label: 'Operador Logístico / Freight Forwarder',
  },
  {
    value: 'importador' as Sector,
    label: 'Importadora / Exportadora con marca propia',
  },
]

const ORIGIN_OPTIONS = [
  {
    value: 10,
    label: '90% o más por voz a voz y relaciones personales',
  },
  {
    value: 20,
    label: 'Mezcla entre referidos y algunas licitaciones',
  },
  {
    value: 30,
    label: 'Contamos con canal digital activo que trae solicitudes',
  },
]

const WEB_OPTIONS = [
  {
    value: 5,
    label: 'No / Tienen más de un año sin actualizar',
  },
  {
    value: 15,
    label: 'Solo publicamos ocasionalmente',
  },
  {
    value: 25,
    label: 'Sí, tenemos contenido técnico y pauta constante',
  },
]

/* =========================================================
   DASHBOARD DEMOSTRATIVO
========================================================= */

const METRICS = [
  {
    icon: Radar,
    label: 'Demanda detectada',
    value: '——',
    sub: 'consultas / mes',
  },
  {
    icon: Building2,
    label: 'Empresas interesadas',
    value: '——',
    sub: 'cuentas',
  },
  {
    icon: Target,
    label: 'Señales de intención',
    value: '——',
    sub: 'esta semana',
  },
  {
    icon: Zap,
    label: 'Campañas activas',
    value: '——',
    sub: 'en ejecución',
  },
]

const BARS = [38, 52, 44, 63, 58, 72, 66, 81, 76, 88, 84, 94]

const OPPORTUNITIES = [
  {
    label: 'Alta intención',
    width: '82%',
  },
  {
    label: 'Media intención',
    width: '54%',
  },
  {
    label: 'En nutrición',
    width: '31%',
  },
]

/* =========================================================
   FUNCIÓN DE RESULTADO
========================================================= */

function getResult(score: number): Result {
  if (score < 45) {
    return {
      level: 'bajo',
      title: 'Madurez digital por desarrollar',
      message:
        'Tu presencia digital todavía tiene oportunidades importantes para convertirse en un canal constante de generación de demanda. El Estudio puede ayudarte a identificar dónde comenzar.',
    }
  }

  if (score < 70) {
    return {
      level: 'medio',
      title: 'Madurez digital en desarrollo',
      message:
        'Ya existen algunos elementos digitales funcionando, pero todavía hay espacio para convertir tu presencia en un sistema más consistente de autoridad y generación de oportunidades.',
    }
  }

  return {
    level: 'alto',
    title: 'Base digital activa',
    message:
      'Tu operación cuenta con una base digital activa. El siguiente paso es identificar oportunidades de demanda, optimizar tu posicionamiento y convertir esa presencia en oportunidades comerciales.',
  }
}

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export function Termometro() {
  /* -------------------------------------------------------
     ESTADO DEL SIMULADOR
  ------------------------------------------------------- */

  const [sector, setSector] = useState<Sector>('aduanas')

  const [originScore, setOriginScore] = useState<number>(10)

  const [webScore, setWebScore] = useState<number>(5)

  const [score, setScore] = useState<number | null>(null)

  /* -------------------------------------------------------
     CALCULAR RESULTADO
  ------------------------------------------------------- */

  const calculateScore = () => {
    /*
      Puntuación base:

      Origen de clientes:
      10 / 20 / 30

      Presencia digital:
      5 / 15 / 25

      Base:
      50

      Resultado máximo:
      105 → limitado a 100
    */

    let calculatedScore = 50 + originScore + webScore

    /* -----------------------------------------------------
       Pequeña personalización según el tipo de empresa.
       No altera radicalmente el resultado.
    ----------------------------------------------------- */

    if (sector === 'aduanas') {
      calculatedScore += 0
    }

    if (sector === 'logistica') {
      calculatedScore += 2
    }

    if (sector === 'importador') {
      calculatedScore += 3
    }

    /* Evitamos superar 100 */

    calculatedScore = Math.min(100, calculatedScore)

    setScore(calculatedScore)
  }

  /* -------------------------------------------------------
     RESULTADO
  ------------------------------------------------------- */

  const result = score !== null ? getResult(score) : null

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <section
      id="termometro"
      className="relative overflow-hidden bg-ink-900 py-24 sm:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />

      {/* =====================================================
          CONTENEDOR
      ====================================================== */}

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Herramienta interactiva
          </p>

          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl">
            Calcula la Madurez Digital de tu Operación
          </h2>

          <p className="mt-5 text-pretty text-base leading-relaxed text-steel">
            Evalúa si tu presencia digital está respaldando tus ventas
            internacionales.
          </p>

        </div>

        {/* ===================================================
            SIMULADOR
        ==================================================== */}

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink-950/80 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]">

          {/* -----------------------------------------------
              BARRA SUPERIOR
          ------------------------------------------------ */}

          <div className="flex items-center justify-between border-b border-white/10 bg-ink-900/70 px-5 py-3">

            <div className="flex items-center gap-2">

              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

              <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />

            </div>

            <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
              Evaluación orientativa
            </span>

          </div>

          {/* -----------------------------------------------
              CONTENIDO DEL SIMULADOR
          ------------------------------------------------ */}

          <div className="p-6 sm:p-8">

            <div className="space-y-7">

              {/* ===========================================
                  PREGUNTA 1
              ============================================ */}

              <div>

                <label
                  htmlFor="termometro-sector"
                  className="mb-2 block text-sm font-semibold text-cold"
                >
                  1. ¿Cuál es la actividad principal de tu empresa?
                </label>

                <select
                  id="termometro-sector"
                  value={sector}
                  onChange={(event) =>
                    setSector(event.target.value as Sector)
                  }
                  className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-cold outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  {SECTOR_OPTIONS.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-ink-900 text-white"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>

              </div>

              {/* ===========================================
                  PREGUNTA 2
              ============================================ */}

              <div>

                <label
                  htmlFor="termometro-origin"
                  className="mb-2 block text-sm font-semibold text-cold"
                >
                  2. ¿Cómo llegan hoy la mayoría de tus clientes nuevos?
                </label>

                <select
                  id="termometro-origin"
                  value={originScore}
                  onChange={(event) =>
                    setOriginScore(Number(event.target.value))
                  }
                  className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-cold outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  {ORIGIN_OPTIONS.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-ink-900 text-white"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>

              </div>

              {/* ===========================================
                  PREGUNTA 3
              ============================================ */}

              <div>

                <label
                  htmlFor="termometro-web"
                  className="mb-2 block text-sm font-semibold text-cold"
                >
                  3. ¿Tu sitio web y perfiles de LinkedIn se actualizaron
                  en los últimos 3 meses?
                </label>

                <select
                  id="termometro-web"
                  value={webScore}
                  onChange={(event) =>
                    setWebScore(Number(event.target.value))
                  }
                  className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-cold outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  {WEB_OPTIONS.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-ink-900 text-white"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>

              </div>

              {/* ===========================================
                  BOTÓN
              ============================================ */}

              <button
                type="button"
                onClick={calculateScore}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-bold text-ink-950 transition-all duration-200 hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(25,195,125,0.15)]"
              >
                Evaluar mi Termómetro de Demanda

                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />

              </button>

            </div>

            {/* =================================================
                RESULTADO
            ================================================== */}

            {result && score !== null && (

              <div className="mt-8 rounded-2xl border border-accent/20 bg-ink-900/80 p-6 text-center">

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-steel">
                  Resultado estimado
                </span>

                <div className="mt-2 text-5xl font-black tabular-nums text-accent">
                  {score}
                  <span className="text-xl text-steel">
                    {' '}
                    / 100
                  </span>
                </div>

                <div className="mx-auto mt-3 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                  {result.title}
                </div>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-steel">
                  {result.message}
                </p>

                {/* -----------------------------------------
                    CTA
                ------------------------------------------ */}

                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink-950 transition-all duration-200 hover:bg-accent/90"
                >
                  Solicitar Diagnóstico

                  <ArrowRight className="h-4 w-4" />
                </a>

              </div>

            )}

          </div>
        </div>

        {/* ===================================================
            PREVIEW DEL DASHBOARD
        ==================================================== */}

        <div className="mx-auto mt-16 max-w-4xl">

          {/* Título */}

          <div className="mb-6 text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel/60">
              Así visualizamos la demanda
            </p>

          </div>

          {/* Dashboard */}

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-950/60">

            {/* ===============================================
                MÉTRICAS
            ================================================ */}

            <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:p-5">

              {METRICS.map((metric) => {

                const Icon = metric.icon

                return (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/10 bg-ink-900/60 p-4"
                  >

                    <div className="flex items-center gap-2 text-steel">

                      <Icon className="h-4 w-4 shrink-0 text-accent" />

                      <span className="text-[10px] font-medium uppercase tracking-wide">
                        {metric.label}
                      </span>

                    </div>

                    <p className="mt-3 text-2xl font-semibold tabular-nums text-cold">
                      {metric.value}
                    </p>

                    <p className="mt-0.5 text-[11px] text-steel/70">
                      {metric.sub}
                    </p>

                  </div>
                )
              })}

            </div>

            {/* ===============================================
                GRÁFICO + OPORTUNIDADES
            ================================================ */}

            <div className="grid gap-3 p-4 pt-0 sm:p-5 sm:pt-0 lg:grid-cols-[1.6fr_1fr]">

              {/* ---------------------------------------------
                  GRÁFICO
              ---------------------------------------------- */}

              <div className="rounded-xl border border-white/10 bg-ink-900/60 p-5">

                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-2">

                    <TrendingUp className="h-4 w-4 shrink-0 text-accent" />

                    <span className="text-sm font-medium text-cold">
                      Tendencia de demanda
                    </span>

                  </div>

                  <span className="hidden text-[11px] text-steel/70 sm:block">
                    últimos 12 periodos
                  </span>

                </div>

                {/* Barras */}

                <div className="mt-6 flex h-40 items-end gap-1.5">

                  {BARS.map((height, index) => (

                    <div
                      key={`bar-${index}`}
                      className="flex-1 rounded-t bg-gradient-to-t from-accent/30 to-accent transition-all duration-500 hover:from-accent/50"
                      style={{
                        height: `${height}%`,
                      }}
                      aria-hidden="true"
                    />

                  ))}

                </div>

                <p className="mt-3 text-[11px] text-steel/60">
                  Visualización ilustrativa · sin datos reales de clientes
                </p>

              </div>

              {/* ---------------------------------------------
                  OPORTUNIDADES
              ---------------------------------------------- */}

              <div className="rounded-xl border border-white/10 bg-ink-900/60 p-5">

                <span className="text-sm font-medium text-cold">
                  Oportunidades
                </span>

                <ul className="mt-5 space-y-4">

                  {OPPORTUNITIES.map((opportunity) => (

                    <li key={opportunity.label}>

                      <div className="flex items-center justify-between gap-3 text-xs text-steel">

                        <span>
                          {opportunity.label}
                        </span>

                        <span className="tabular-nums text-steel/60">
                          ——
                        </span>

                      </div>

                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10">

                        <div
                          className="h-full rounded-full bg-accent"
                          style={{
                            width: opportunity.width,
                          }}
                          aria-hidden="true"
                        />

                      </div>

                    </li>

                  ))}

                </ul>

              </div>

            </div>
          </div>
        </div>

        {/* ===================================================
            DISCLAIMER
        ==================================================== */}

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-steel/50">
          Esta evaluación es orientativa y utiliza una metodología
          simplificada. Los resultados no constituyen una auditoría ni
          representan resultados garantizados.
        </p>

      </div>
    </section>
  )
}
