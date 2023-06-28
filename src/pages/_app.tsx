import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins, Raleway } from 'next/font/google'

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} ${raleway.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
