import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Problema } from '@/components/problema'
import { Diferencial } from '@/components/diferencial'
import { Metodologia } from '@/components/metodologia'
import { Termometro } from '@/components/termometro'
import { Sectores } from '@/components/sectores'
import { Autoridad } from '@/components/autoridad'
import { Proceso } from '@/components/proceso'
import { CtaPrincipal } from '@/components/cta-principal'
import { Formulario } from '@/components/formulario'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Diferencial />
        <Metodologia />
        <Termometro />
        <Sectores />
        <Autoridad />
        <Proceso />
        <CtaPrincipal />
        <Formulario />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
