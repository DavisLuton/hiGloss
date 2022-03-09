import Form from "../component/Form";
import { FormspreeProvider } from '@formspree/react';
import { Container, Text ,Heading, GridItem } from "@chakra-ui/react";
import FlexContainer from "../component/FlexContainer";
import PageHeader from "../component/PageHeader";


const Contact = () => {
    return ( 
        <FlexContainer>
        <PageHeader title={'Contact'} description={'Fill out this form so we can ignore it'}/>
        <GridItem colStart={{base: 2, lg: 3}} colEnd={9}
                  rowStart={4} rowEnd={11}>
            
                <Form/>
            
        </GridItem>
        </FlexContainer>
     );
}
 
export default Contact;