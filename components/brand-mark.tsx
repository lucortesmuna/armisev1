export function BrandMark() {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="relative flex h-8 w-8 items-center justify-center rounded-md border border-accent/40 bg-accent/10"
      >
        <img src="lucortesmuna/armisev1/public/Logo-2025-4-Logo-principal-oscuro-fondo-claro.webp" alt="LOGO NEGRO" />
        
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-cold">
          ARMISE
        </span>
        <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-steel">
         Análisis y estrategias basadas en datos
        </span>
      </span>
    </span>
  )
}
