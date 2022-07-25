import { Box, Button, Center, Container, Flex, GridItem, Heading, VStack, Text } from '@chakra-ui/react'
import GridContainer from '../component/GridContainer'
import Image from 'next/image'
import hero from '/assets/windowHero.png'
import NextLink from "next/link"
export default function Home() {
  return (
    
    
    
    <GridContainer>

    
        <Container zIndex={-2}>
          <Image src={hero} 
                alt="img"
                layout='fill'
                objectFit='cover'
          >
                
          </Image> 
        </Container>
      
      <GridItem 
                colStart={{base: 2, md:1}} colEnd={{base:12, md: 13}}
                rowStart={4} rowEnd={11} 
                >
          <VStack 
            h='100%'
            justify='space-evenly'
            align='center'
            >

            <Box textAlign='center' color='contrast'   >
              <Heading fontSize= {{base:'4xl', lg: '8xl'}} fontweight='800'>
                Brighten Up <br/> Every Room
              </Heading>
              
            
              <Text fontSize={{base:'md', lg: '2xl'}} color='contrast' fontweight='600'>
                With clean windows, every day shines a little brighter
              </Text>
            </Box>

              <Button color='brand' size='lg'>
                <NextLink href='/contact' passHref>
                  Get in Touch!
                </NextLink>
              </Button>
          </VStack>
        </GridItem>
            
      </GridContainer>
  )
}
