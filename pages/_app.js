import {ChakraProvider} from '@chakra-ui/react'
import Header from '../component/Header'



function MyApp({ Component, pageProps }) {
  
  return(
    <ChakraProvider>
      <Header/>
        {/* header and navbar */}
          <Component {...pageProps} /> {/* ALL content*/}
          
    </ChakraProvider>
  ) 
}

export default MyApp
