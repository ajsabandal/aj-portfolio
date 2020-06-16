import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import About from '../pages/about'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/index.css'
import ClipLoader from "react-spinners/ClipLoader";

export default function MyApp({ Component, pageProps }) {
  return (
      <>
        {/* <div className="clip-loader">
        <ClipLoader />
        </div> */}
          <Header  />
          <Navbar />
          <Component {...pageProps} />
          <About />
          <Footer />
          
      </>
  )
}