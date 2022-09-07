import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import NavBar from "../component/navBar"

function MyApp({ Component, pageProps, session }) {

  return <>
    <SessionProvider session={session}>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </SessionProvider>

  </>
}

export default MyApp
