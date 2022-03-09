import Head from 'next/head'
import Header from '../component/Header'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import heroImg from '/assets/heroPlaceholder.jpg'
import Link from 'next/link'
import { Box, Button, Container, Flex, GridItem, Heading, VStack } from '@chakra-ui/react'
import FlexContainer from '../component/FlexContainer'


export default function Home() {
  return (
    
 
    
    <FlexContainer>
      <GridItem colStart={4} colEnd={9}
                rowStart={4} rowEnd={9} >
          <Heading>
            Big Letters 
          </Heading>
          <Heading>
            Smaller Letters
          </Heading>
          <Link href='/contact'>
            <Button >
              Get in Touch
            </Button>
          </Link>
        </GridItem>    
      </FlexContainer>
  )
}
