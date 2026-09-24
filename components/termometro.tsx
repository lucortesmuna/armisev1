import { TrendingUp, Radar, Building2, Target, Zap } from 'lucide-react'

const METRICS = [
  { icon: Radar, label: 'Demanda detectada', value: '——', sub: 'consultas / mes' },
  { icon: Building2, label: 'Empresas interesadas', value: '——', sub: 'cuentas' },
  { icon: Target, label: 'Señales de intención', value: '——', sub: 'esta semana' },
  { icon: Zap, label: 'Campañas activas', value: '——', sub: 'en ejecución' },
]

const BARS = [38, 52, 44, 63, 58, 72, 66, 81, 76, 88, 84, 94]

export function Termometro() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Tu demanda también se puede medir
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl">
            Termómetro de Demanda
            <span className="align-super text-base text-accent">™</span>
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-steel">
            Un tablero de control para visualizar señales de interés, comportamiento de
            prospectos, rendimiento de campañas y oportunidades comerciales.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-ink-950/80 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]">
          {/* window bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-ink-900/70 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
            </div>
            <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
              Datos demostrativos
            </span>
          </div>

          <div className="p-5 sm:p-7">
            {/* metric row */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-white/10 bg-ink-900/60 p-4"
                >
                  <div className="flex items-center gap-2 text-steel">
                    <m.icon className="h-4 w-4 text-accent" />
                    <span className="text-[11px] font-medium uppercase tracking-wide">
                      {m.label}
                    </span>
                  </div>
                  <p className="mt-3 text-2xl font-semibold tabular-nums text-cold">
                    {m.value}
                  </p>
                  <p className="mt-0.5 text-[11px] text-steel/70">{m.sub}</p>
                </div>
              ))}
            </div>

            {/* chart + side */}
            <div className="mt-4 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
              <div className="rounded-xl border border-white/10 bg-ink-900/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-cold">
                      Tendencia de demanda
                    </span>
                  </div>
                  <span className="text-[11px] text-steel/70">últimos 12 periodos</span>
                </div>
                <div className="mt-6 flex h-40 items-end gap-1.5">
                  {BARS.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-accent/30 to-accent"
                      style={{ height: `${h}%` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-steel/60">
                  Visualización ilustrativa · sin datos reales de clientes
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-ink-900/60 p-5">
                <span className="text-sm font-medium text-cold">Oportunidades</span>
                <ul className="mt-5 space-y-4">
                  {[
                    { l: 'Alta intención', w: '82%' },
                    { l: 'Media intención', w: '54%' },
                    { l: 'En nutrición', w: '31%' },
                  ].map((o) => (
                    <li key={o.l}>
                      <div className="flex items-center justify-between text-xs text-steel">
                        <span>{o.l}</span>
                        <span className="tabular-nums text-steel/60">——</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: o.w }}
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

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-steel/60">
          Interfaz de referencia. Los valores mostrados son placeholders y no representan
          resultados, clientes ni casos reales.
        </p>
      </div>
    </section>
  )
}
