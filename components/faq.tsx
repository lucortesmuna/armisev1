'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const ITEMS = [
  {
    q: '¿Qué incluye el Estudio de Generación de Demanda?',
    a: 'Incluye investigación de la demanda de tu nicho, análisis de entre 3 y 5 competidores directos, un mapa de oportunidades comerciales y un diagnóstico de tu presencia digital. El objetivo es entender qué busca tu comprador y dónde existen vacíos de autoridad que puedes ocupar.',
  },
  {
    q: '¿Trabajan únicamente con empresas de comercio exterior?',
    a: 'Nuestra especialización está en empresas donde el comercio exterior es el negocio: agencias de aduanas, operadores logísticos, freight forwarders, importadoras y exportadoras. Ese enfoque es precisamente lo que nos permite hablar el lenguaje de tu mercado.',
  },
  {
    q: '¿Cuál es la diferencia frente a una agencia de marketing tradicional?',
    a: 'Una agencia tradicional suele optimizar métricas superficiales con contenido genérico. Nosotros partimos del contexto del negocio —aranceles, Incoterms, regulación DIAN, logística y geopolítica— para construir autoridad sectorial, investigar demanda real y ejecutar prospección B2B con criterio comercial.',
  },
  {
    q: '¿Trabajan con agencias de aduanas?',
    a: 'Sí. Es uno de nuestros sectores principales. Ayudamos a las agencias de aduanas a demostrar respaldo operativo, conocimiento y confiabilidad para competir más allá del precio frente a jugadores de mayor tamaño.',
  },
  {
    q: '¿Cuánto tiempo tarda el diagnóstico?',
    a: 'El tiempo depende del alcance y del sector, ya que la profundidad de la investigación de demanda y del análisis competitivo varía según cada caso. Lo definimos contigo en la conversación inicial, una vez entendemos tu operación y objetivos.',
  },
  {
    q: '¿Los resultados están garantizados?',
    a: 'No prometemos resultados garantizados. Los resultados dependen de variables como el mercado, la propuesta de valor, el ciclo comercial, el presupuesto y el punto de partida de cada empresa. Nuestro compromiso es aplicar un método riguroso, medir las señales de demanda de forma continua y optimizar con base en datos.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-ink-950 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Preguntas frecuentes
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl">
            Lo que suelen preguntarnos.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="text-[15px] font-medium text-cold sm:text-base">
                      {item.q}
                    </span>
                    <span
                      className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-steel transition-transform duration-300 ${
                        isOpen ? 'rotate-45 border-accent/50 text-accent' : ''
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-sm leading-relaxed text-steel">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
