'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'

const TIPOS = [
  'Agencia de Aduanas',
  'Operador Logístico',
  'Freight Forwarder',
  'Importadora',
  'Exportadora',
  'Otro',
]

const RETOS = [
  'Generar más clientes',
  'Diferenciarme de la competencia',
  'Mejorar posicionamiento',
  'Entrar en nuevos mercados',
  'Generar demanda B2B',
  'Otro',
]

function Field({
  label,
  children,
  htmlFor,
}: {
  label: string
  children: React.ReactNode
  htmlFor: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium uppercase tracking-wide text-steel"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full rounded-md border border-white/12 bg-ink-950/60 px-3.5 py-2.5 text-sm text-cold placeholder:text-steel/50 outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20'

export function Formulario() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="formulario" className="relative bg-ink-900 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Diagnóstico
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-cold sm:text-4xl">
            Solicita tu diagnóstico
          </h2>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-ink-950/50 p-6 sm:p-9">
          {submitted ? (
            <div
              className="flex flex-col items-center py-10 text-center"
              role="status"
              aria-live="polite"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-cold">
                Solicitud recibida
              </h3>
              <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-steel">
                Gracias. Revisaremos la información de tu empresa y te contactaremos para
                coordinar la conversación inicial de tu diagnóstico de generación de
                demanda.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 text-sm font-semibold text-accent transition-colors hover:text-accent-600"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" htmlFor="nombre">
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Tu nombre"
                  />
                </Field>
                <Field label="Empresa" htmlFor="empresa">
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    autoComplete="organization"
                    className={inputClass}
                    placeholder="Nombre de la empresa"
                  />
                </Field>
                <Field label="Cargo" htmlFor="cargo">
                  <input
                    id="cargo"
                    name="cargo"
                    type="text"
                    autoComplete="organization-title"
                    className={inputClass}
                    placeholder="Gerente comercial, director…"
                  />
                </Field>
                <Field label="Correo corporativo" htmlFor="correo">
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="nombre@empresa.com"
                  />
                </Field>
                <Field label="WhatsApp" htmlFor="whatsapp">
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="+57 300 000 0000"
                  />
                </Field>
                <Field label="Tipo de empresa" htmlFor="tipo">
                  <div className="relative">
                    <select
                      id="tipo"
                      name="tipo"
                      required
                      defaultValue=""
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      {TIPOS.map((t) => (
                        <option key={t} value={t} className="bg-ink-900">
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />
                  </div>
                </Field>
              </div>

              <Field label="Principal reto comercial" htmlFor="reto">
                <div className="relative">
                  <select
                    id="reto"
                    name="reto"
                    required
                    defaultValue=""
                    className={`${inputClass} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {RETOS.map((r) => (
                      <option key={r} value={r} className="bg-ink-900">
                        {r}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />
                </div>
              </Field>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-600 hover:shadow-[0_12px_32px_-10px_rgba(25,195,125,0.7)]"
              >
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-center text-xs text-steel/60">
                Analizamos tu mercado antes de proponerte cualquier solución.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
