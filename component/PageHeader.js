import { GridItem, Heading, Text } from "@chakra-ui/react";
const PageHeader  = ({title, description}) => {
    return (
        <GridItem 
            color='contrast'
            colStart={{base:2, lg: 3}}
            colEnd= {{base:12, lg:7}} 
            rowStart={{base:3, lg:2}}
    
            >
            <Heading size='3xl'>
                {title}
            </Heading>
            <Text color='contrast' size='lg'>{description}</Text>

        </GridItem>
        
      );
}
 
export default PageHeader