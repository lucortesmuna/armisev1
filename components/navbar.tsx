'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandMark } from './brand-mark'

const LINKS = [
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Diferencial', href: '#diferencial' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Principal"
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="Inicio">
          <BrandMark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-steel transition-colors hover:text-cold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#formulario"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink-950 shadow-[0_0_0_1px_rgba(25,195,125,0.4)] transition-all hover:bg-accent-600 hover:shadow-[0_8px_24px_-8px_rgba(25,195,125,0.6)]"
          >
            Solicitar diagnóstico
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-cold md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 px-5 pb-6 pt-2 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-base font-medium text-steel transition-colors hover:text-cold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#formulario"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-ink-950"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
