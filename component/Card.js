import { Box, Container , Heading, Flex, Img, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image'
const Card = ({imagesrc, title, text}) => {
    return ( 
        <Box           
             m={3}
             p={8}
             borderWidth='1px'
             borderRadius='lg'  
             boxShadow='base'>
         
             

              
         
            <Container p={0}>
                <Image  layout='responsive'
                        src={imagesrc} 
                        alt={title}
                        borderRadius='full'>
                </Image>
            </Container>

                <VStack 
                    mt={8}
                    align='left'
                    spacing={5}
                    >
                   
                    <Heading size='lg' mb={5}>
                        {title}
                    </Heading>
                
                    <Text fontSize='xl'>
                        {text}
                    </Text>
                </VStack>
        </Box>
     );
}
 
export default Card;