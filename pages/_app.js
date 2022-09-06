import '../styles/globals.css'
import NavBar from "../component/navBar"
function MyApp({ Component, pageProps }) {

  return <>
    <NavBar></NavBar>
    <Component {...pageProps} />
  </>
}

export default MyApp
