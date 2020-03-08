import Header from '../components/header'
import Navbar from '../components/navbar'
import '../styles/index.css'


export default function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header  />
        <Navbar />
        <Component {...pageProps} />
      </>
  )
}