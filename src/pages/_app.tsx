import PageLoader from '@/components/Loader/PageLoader'
import '@/styles/components.css'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Raleway } from 'next/font/google'
import Router from "next/router"
import { useEffect, useState } from "react"


/*const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700']
})*/
/*const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})*/

const raleway = Raleway({
  preload: true,
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '300', '400', '500', '700', '900']
})


//Custom fonts on NextJS https://youtu.be/L8_98i_bMMA
export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])


  return loading ? <PageLoader title={`Cargando ${Router.asPath}`} /> : (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <AnimatePresence>
        <main className={`${raleway.className} dark:bg-neutral-700 bg-white text-black dark:text-white `} >
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ThemeProvider>
  )
}
