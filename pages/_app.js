import Header from '../components/header'
import Navbar from '../components/navbar'
// import Footer from '../components/footer'
// import About from '../pages/about'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/index.css'


export default function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header  />
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer /> */}
        {/* <About /> */}
      </>
  )
}