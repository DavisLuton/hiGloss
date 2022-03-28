import React from "react";
import NextLink from "next/link"
import { Container, 
        Link, 
        SimpleGrid, 
        Heading,
        Button, 
        Box,
        Menu,
        GridItem, 
        MenuButton,
        IconButton,
        Flex, 
        HStack, 
        MenuList,
        MenuItem,} from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon} from "@chakra-ui/icons";

const MobileNav = () => {
    return ( 
        <>
            <Menu autoSelect={false}> 
                {({ isOpen }) => (
                    <>
                        {/*TODO: icon transition/separate menubutton component if necessary */}
                        <MenuButton
                            size='lg'
                            isActive={isOpen}
                            as={IconButton}
                            aria-label='menu'
                            variant="ghost"
                            borderRadius="none"
                            _hover={{ background: "none" }}
                            _active={{ background: "none" }}
                            icon={isOpen ? <CloseIcon boxSize='1.5em'/> : <HamburgerIcon boxSize='1.5em' />} 
                        />

                    <MenuList
                        bg='white'
                        border='0'
                        borderRadius='0'
                    >
                        <Container
                            w='100vw'
                            h='full'
                            pt='1em'
                            fontSize='5xl'
                    >

                        <MenuItem>
                            <NextLink href='/' passHref>
                                Home
                            </NextLink>
                        </MenuItem>
                        <MenuItem>
                            <NextLink href='/services' passHref>
                                Services
                            </NextLink>
                        </MenuItem>
                        <MenuItem>
                            <NextLink href='/about' passHref>
                                About Us
                            </NextLink>
                        </MenuItem>
                        <MenuItem>
                            <NextLink href='/contact' passHref>
                                Contact
                            </NextLink>
                        </MenuItem>
                        </Container>
                    </MenuList>
                    </>
                )}
            </Menu>
        </>
                        

     );
}
 
export default MobileNav;