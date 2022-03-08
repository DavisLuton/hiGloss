import { Box, Container , Heading, Img, Text} from '@chakra-ui/react';
import Image from 'next/image'
const Card = ({imagesrc, title, text}) => {
    return ( 
        <Box p={6}
             borderWidth='1px'
             borderRadius='lg'  
             boxShadow='base' 
         >
            <Image src={imagesrc} 
                    alt={title}
                    boxSize='md' 
                    borderRadius='full'>
            </Image>
        
             <Heading>
                {title}
            </Heading>
        
            <Text>
                {text}
            </Text>
        
        </Box>
     );
}
 
export default Card;