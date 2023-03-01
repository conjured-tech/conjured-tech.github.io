import { ChakraProvider } from '@chakra-ui/react'
import '../styles/global.css'
import Theme from '../components/theme'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
