import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Generación de Demanda B2B para Comercio Exterior',
  description:
    'Firma estratégica que convierte tu solidez operativa en comercio exterior en autoridad de marca, demanda predecible y clientes calificados. Aranceles, Incoterms, DIAN y datos — no solo clics.',
  generator: 'v0.app',
  keywords: [
    'generación de demanda',
    'comercio exterior',
    'B2B',
    'agencias de aduanas',
    'freight forwarders',
    'operadores logísticos',
    'account based marketing',
    'prospección B2B',
  ],
  openGraph: {
    title: 'Generación de Demanda B2B para Comercio Exterior',
    description:
      'Convertimos tu capacidad operativa en autoridad, demanda y oportunidades comerciales.',
    type: 'website',
    locale: 'es_CO',
  },
}

export const viewport: Viewport = {
  themeColor: '#07111F',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} dark`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
