export function BrandMark() {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="relative flex h-8 w-8 items-center justify-center rounded-md border border-accent/40 bg-accent/10"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none">
          <path
            d="M3 17 9 11l4 4 8-9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="11" r="1.6" fill="currentColor" />
          <circle cx="13" cy="15" r="1.6" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-cold">
          [Nombre de la Empresa]
        </span>
        <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-steel">
          Demand · Comercio Exterior
        </span>
      </span>
    </span>
  )
}
