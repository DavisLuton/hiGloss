import { Container, Flex, GridItem, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/dist/client/image";
import darrell from "/assets/darrell.png"
import PageHeader from "../component/PageHeader";
import GridContainer from "../component/GridContainer";



const About = () => {
    return ( 
        
            <GridContainer>
           
                <PageHeader
                    title={'About Us'}
                />
            <GridItem 
                colStart={{base: 2, lg: 3}} colEnd={{base: 11, lg: 6}}
                rowStart={{base: 7, lg: 4}} rowEnd={{base:13, lg:9}}>
                
                
                
                
            
                    <Text mb='100' fontSize='3xl'> 
                    We are a small commercial cleaning company that has been serving the Greater Victoria business community since 1989.  
We take pride in offering high quality cleaning services for local businesses.  We are known for our reliability, professionalism, and friendly service.  </Text>
                    <br />
                    
                
                
            </GridItem>
            <GridItem 
                colStart={{base:2, lg:7}} colEnd={11}
                rowStart={4} rowEnd={10}>
            <Image src={darrell} alt="darrell johnson"/>
            </GridItem>
           
            </GridContainer>
          
     );
}
 
export default About