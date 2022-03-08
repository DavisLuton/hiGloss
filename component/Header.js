
import Link from "next/link";
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
    Container} 
    from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";


const Header = () => {

    const mobileNav = useDisclosure();
    return ( 
    <Container position='absolute'  padding={0} >
    
        {/* navbar header */}
       <Flex  justify='space-between' bg='gray.50' w='100vw'>
            <h1>Logo</h1>
            {/* desktop nav: */}
            <HStack display={{ base: 'none', md: 'inline-flex' }}>
                <Link href='/'>Home</Link>
                <Link href='/services'>Services</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
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
                    onClick={mobileNav.onToggle}
                />
               <VStack 

                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection='column'
                spacing={3}>
                    <Button w='full' variant='ghost'>
                        <Link href='/'>Home</Link>
                    </Button>
                    <Button w='full' variant='ghost'>
                        <Link href='/services'>Services</Link>
                    </Button>
                    <Button w='full' variant='ghost'>
                        <Link href='/about'>About</Link>
                    </Button>
                    <Button w='full' variant='ghost'>
                        <Link href='/contact'>Contact</Link>
                    </Button>
                   
               </VStack> 
            </Box>
       
        </Flex>
     </Container>
     );
}
 
export default Header;