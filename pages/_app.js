import '@fontsource/raleway'
import {ChakraProvider, ScaleFade} from '@chakra-ui/react'
import Navbar from '../component/Navbar'
import Theme from '../component/theme/Theme'


function MyApp({ Component, pageProps, router }) {
  
  return(
    <ChakraProvider theme={Theme}>
      <Navbar/> {/* header and navbar */}
     
      <ScaleFade 
        key={router.route} 
        initialScale={0.9}
        in="true">

        <Component {...pageProps} /> {/* ALL content*/}
      </ScaleFade>
    </ChakraProvider>
  ) 
}

export default MyApp
