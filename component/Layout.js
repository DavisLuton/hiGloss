import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({children}) => {
    return ( 
        <Container>
            <Header/>
            <main> 
                {children} 
            </main>
           
        </Container>
     );

}
 
export default Layout;