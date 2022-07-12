import Form from "../component/Form";
import { FormspreeProvider } from '@formspree/react';
import { Container, Text ,Heading, GridItem } from "@chakra-ui/react";
import GridContainer from "../component/GridContainer";
import PageHeader from "../component/PageHeader";
import Mailto from "../component/MailTo";


const Contact = () => {
    return ( 
        <GridContainer>
        <PageHeader title={'Contact'} description={"Tell us your name and what you're looking for and we'll get back to you soon!"}/>
        <GridItem colStart={{base: 2, lg: 4}} colEnd={{base: 12, lg:9}}
                  rowStart={4} rowEnd={{base: 12, lg: 9}}>
            
                <Mailto/>
        </GridItem>
        </GridContainer>
     );
}
 
export default Contact;