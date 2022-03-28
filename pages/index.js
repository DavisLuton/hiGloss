import { Box, Button, Container, Flex, GridItem, Heading, VStack } from '@chakra-ui/react'
import GridContainer from '../component/GridContainer'
import Image from 'next/image'
import lowPoly from '/assets/lowpoly.png'
import NextLink from "next/link"
export default function Home() {
  return (
    
    
    
    <GridContainer>

    
        <Container zIndex={-1}>
        <Image src={lowPoly} 
               alt="img"
               layout='fill'
               objectFit='cover'
        >
              
        </Image> 
        </Container>
      
      <GridItem 
                colStart={{base: 2, md:4}} colEnd={{base:12, md: 9}}
                rowStart={4} rowEnd={9} 
                >
          <VStack>
            <Box textAlign='center' color='white' fontweight='semibold'fontSize= {{base:'6xl', lg: '8xl'}} >
              Big Letters 
            </Box>
            <Heading color='white'>
              Smaller Letters
            </Heading>
            
              <Button >
              <NextLink href='/contact' passHref>
                 Get in Touch!
              </NextLink>
              </Button>
          </VStack>
        </GridItem>
            
      </GridContainer>
  )
}
