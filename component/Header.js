
import NextLink from "next/link";
import React from "react";
import { 
    Flex, 
    Button,
    IconButton, 
    CloseIcon, 
    HStack, 
    Box, 
    useDisclosure,
    VStack,
    Container,
    SimpleGrid,
    GridItem,
    Link,
    Divider} 
    from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";


const Header = () => {

    const mobileNav = useDisclosure();
    return ( 
    <Container position='absolute'  padding={0} >
    
        {/* navbar header */}
      
        <SimpleGrid w='100vw' minHeight='3em' columns={12} >
                <GridItem colStart={2} colEnd={12}>
                    <Flex justify='space-between' align='center'>
                        <h1>Logo</h1>
                        {/* desktop nav: */}
                        <HStack display={{ base: 'none', md: 'inline-flex' }}>
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
                    

                    {/* mobile nav: */}
                        <Box display={{base: 'flex', md: 'none '}}
                            alignItems='flex-end'
                            flexDirection='column'>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                icon={<HamburgerIcon/>}
                                variant="ghost"
                                onClick={mobileNav.onToggle}/> 
                            </Box>
                        </Flex>
                    </GridItem>
                   
                </SimpleGrid>
                
                <VStack 

                    display={mobileNav.isOpen ? 'flex' : 'none'}
                    flexDirection='column'
                    spacing={3}>
                        <Button w='full' variant='ghost'>
                            <NextLink href='/'>Home</NextLink>
                        </Button>
                        <Button w='full' variant='ghost'>
                            <NextLink href='/services'>Services</NextLink>
                        </Button>
                        <Button w='full' variant='ghost'>
                            <NextLink href='/about'>About</NextLink>
                        </Button>
                        <Button w='full' variant='ghost'>
                            <NextLink href='/contact'>Contact</NextLink>
                        </Button>
                    
                </VStack> 
              
        
                <Divider w='100vw'/>        
     </Container> 

     
     
     );
}
 
export default Header;