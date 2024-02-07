import { Analytics } from '@vercel/analytics/react'

import { Metadata } from 'next'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import '@/styles/globals.css'
import { Poppins, Raleway } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { ThemeProvider } from '@/theme-provider'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-raleway'
})

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }]
}

export const metadata: Metadata = {
  title: "KANA's Portfolio",
  description: "KANA's portfolio weibsite"
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang={locale}>
      <body className={`${poppins.variable} ${raleway.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            {children}
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
