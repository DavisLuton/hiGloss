import {Flex, Grid,} from "@chakra-ui/react";

const FlexContainer = (props) => {
    return ( 
        <Grid
          w='full' 
          h='100vh'
          templateColumns='repeat(12, 1fr)'
          templateRows='repeat(12, 1fr)'

          
          >
          {props.children}      
        </Grid>
     );
}
 
export default FlexContainer;