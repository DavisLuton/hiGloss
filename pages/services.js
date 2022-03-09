import { Container, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import Card from "../component/Card";
import PageHeader from "../component/PageHeader";
import FlexContainer from "../component/FlexContainer";
import svc from '/assets/svcPlaceholder.jpg' 

const Services = () => {
    return ( 
        <FlexContainer>
            <PageHeader
                title={'Services'}
                description={'Here is a list of things we do'}
            />
            <GridItem 
                colStart={{base: 2, lg: 3}} colEnd={12}
                rowStart={4} rowEnd={11}>
            
            
                <Flex direction={{base:'column', lg: 'row'}}>
                        <Card imagesrc={svc} title={'Service'} text={'yeet'}/>
                        <Card imagesrc={svc} title={'Service'} text={'yeet'}/>
                        <Card imagesrc={svc} title={'Service'} text={'yeet'}/>
                </Flex>
            </GridItem>      
           
        </FlexContainer>
     );
}
 
export default Services;