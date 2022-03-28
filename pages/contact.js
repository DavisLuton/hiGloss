import Form from "../component/Form";
import { FormspreeProvider } from '@formspree/react';
import { Container, Text ,Heading, GridItem } from "@chakra-ui/react";
import GridContainer from "../component/GridContainer";
import PageHeader from "../component/PageHeader";


const Contact = () => {
    return ( 
        <GridContainer>
        <PageHeader title={'Contact'} description={'Fill out this form so we can ignore it'}/>
        <GridItem colStart={{base: 2, lg: 4}} colEnd={{base: 12, lg:9}}
                  rowStart={4} rowEnd={{base: 12, lg: 9}}>
            
                <Form/> {/*Contact form*/}
            
        </GridItem>
        </GridContainer>
     );
}
 
export default Contact;