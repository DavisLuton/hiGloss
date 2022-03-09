import { GridItem, Heading, Text } from "@chakra-ui/react";
const PageHeader  = ({title, description}) => {
    return (
        <GridItem 
            colStart={{base:2, lg: 3}} 
            rowStart={2}
            colSpan={3}
            >
            <Heading size='4xl'>
                {title}
            </Heading>
            <Text size='lg'>{description}</Text>

        </GridItem>
        
      );
}
 
export default PageHeader