import {Grid} from "@chakra-ui/react";

const GridContainer = (props) => {
    return ( 
        <Grid
          w='100vw' 
          h='100vh'
          templateColumns='repeat(12, 1fr)'
          templateRows='repeat(12, 1fr)'

          >
          {props.children}      
        </Grid>
     );
}
 
export default GridContainer;