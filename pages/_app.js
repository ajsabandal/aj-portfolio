import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/index.css'


export default function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header  />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
  )
}