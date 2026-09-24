const NODES = [
  { cx: 120, cy: 140, r: 3, d: '0s' },
  { cx: 360, cy: 90, r: 2.5, d: '0.6s' },
  { cx: 620, cy: 180, r: 3.5, d: '1.2s' },
  { cx: 880, cy: 120, r: 2.5, d: '0.3s' },
  { cx: 1080, cy: 220, r: 3, d: '0.9s' },
  { cx: 260, cy: 320, r: 2.5, d: '1.5s' },
  { cx: 520, cy: 380, r: 3, d: '0.4s' },
  { cx: 780, cy: 340, r: 2.5, d: '1.1s' },
  { cx: 1000, cy: 420, r: 3.5, d: '0.7s' },
  { cx: 180, cy: 480, r: 3, d: '1.3s' },
]

const ROUTES = [
  'M120 140 Q 300 40 360 90 T 620 180',
  'M620 180 Q 780 60 880 120 T 1080 220',
  'M260 320 Q 420 260 520 380 T 780 340',
  'M780 340 Q 920 360 1000 420',
  'M120 140 Q 180 300 260 320 T 520 380',
  'M180 480 Q 400 440 520 380',
]

export function TradeRoutesBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* radial glow */}
      <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute right-[-5%] top-[30%] h-[360px] w-[360px] rounded-full bg-ink-700/50 blur-[100px]" />

      <svg
        viewBox="0 0 1200 560"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-70"
      >
        <defs>
          <linearGradient id="route-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#19c37d" stopOpacity="0" />
            <stop offset="50%" stopColor="#19c37d" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8fa3b8" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="node-grad">
            <stop offset="0%" stopColor="#19c37d" />
            <stop offset="100%" stopColor="#19c37d" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {ROUTES.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="url(#route-grad)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            style={{
              animation: `dash-flow ${18 + i * 3}s linear infinite`,
            }}
          />
        ))}

        {NODES.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r + 5}
              fill="url(#node-grad)"
              opacity="0.25"
            />
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="#19c37d"
              style={{
                transformOrigin: `${n.cx}px ${n.cy}px`,
                animation: `float-pulse ${4 + i * 0.4}s ease-in-out infinite`,
                animationDelay: n.d,
              }}
            />
          </g>
        ))}
      </svg>

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#8fa3b8 1px, transparent 1px), linear-gradient(90deg, #8fa3b8 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)',
        }}
      />

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
    </div>
  )
}
