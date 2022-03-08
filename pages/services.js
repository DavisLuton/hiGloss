import { Container, Heading, Text } from "@chakra-ui/react";
import Card from "../component/Card";
import FlexContainer from "../component/FlexContainer";
import svc from '/assets/svcPlaceholder.jpg' 

const Services = () => {
    return ( 
        <FlexContainer>
            <Container>
                <Heading size='4xl'>Services</Heading>
                <Text>Here is a list of the things we do:</Text>
                <Card imagesrc={svc} title={'Service'} text={'yeet'}>

                </Card>
            </Container>
        </FlexContainer>
     );
}
 
export default Services;