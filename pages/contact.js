import Form from "../component/Form";
import { FormspreeProvider } from '@formspree/react';
import { Container, Text ,Heading } from "@chakra-ui/react";
import FlexContainer from "../component/FlexContainer";


const Contact = () => {
    return ( 
        <FlexContainer>
        <Container>
            <Heading size='4xl'>Contact</Heading>
            <Text>Fill out this form so we can ignore it.</Text>
            <Form/>
        </Container>
        </FlexContainer>
     );
}
 
export default Contact;