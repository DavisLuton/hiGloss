import {Flex,} from "@chakra-ui/react";

const FlexContainer = (props) => {
    return ( 
        <Flex
          w='full' 
          h='100vh'
          justify='center'
          align='center'
          >
          {props.children}      
        </Flex>
     );
}
 
export default FlexContainer;