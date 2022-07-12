import React from "react";

import { Container, 
        SimpleGrid, 
        Heading,
        GridItem, 
        Flex,
        Box,
        HStack,
        Divider, 
        } from "@chakra-ui/react";
import logo from '/assets/logo.svg'
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Image from "next/image";

const Navbar = () => {
    return ( 
            <Container 
                zIndex={2}
                bg='white'
                position='absolute' 
                padding={0}>
            <SimpleGrid  
                h={{base: '5em', md: '3em'}}
                w='100vw' 
                bg='white'
                columns={12}
                pt='0.5em'
                pb='0.4em'
                >
                <GridItem colStart={2} colEnd={12}>
                    <Flex 
                        justify='space-between'
                        align='flex-end'
                        
                        >
                        <HStack
                            m={0}
                            p={0}
                        >
                        <Box maxH={8} maxW={8}>
                        <Image 
                                src={logo} 
                                alt='logo'
                               
                                  
                                />
                        </Box>
                            
                            <Heading 
                                pl={5}
                                as='h1' 
                                size='md'>
                            High Gloss</Heading>
                        </HStack>
                        

                        <Box 
                            
                            display={{base: 'inline-flex', md: 'none'}} >
                            <MobileNav />
                        </Box>

                        <Box display={{base: 'none', md: 'inline-flex'}}>
                            <DesktopNav />
                        </Box>

                        
                     </Flex>

                </GridItem>
                <Divider w='full'/>
            </SimpleGrid>
            
            </Container>
            
     );
}
 
export default Navbar;
