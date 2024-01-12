import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-nunito',
})

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${nunito.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
