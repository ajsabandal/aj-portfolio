import Header from '../components/header'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header  />
        <Component {...pageProps} />
      </>
  )
}