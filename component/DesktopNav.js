import React from "react";
import NextLink from "next/link"
import { 
        Link, 
   
        HStack, 
        MenuItem,} from "@chakra-ui/react";

const DesktopNav = () => {
    return ( 
        <HStack 
            
            spacing='1.5em'
        >
            <NextLink href='/' passHref>
                    <Link>Home</Link> 
                </NextLink>

                <NextLink href='/services' passHref>
                    <Link>Services</Link> 
                </NextLink>

                <NextLink href='/about' passHref>
                    <Link>About</Link> 
                </NextLink>
                
                <NextLink href='/contact' passHref>
                    <Link>Contact</Link> 
                </NextLink>
        </HStack>
     );
}
 
export default DesktopNav;