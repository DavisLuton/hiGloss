import { Spacer, Flex, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Card from "../component/Card";
import PageHeader from "../component/PageHeader";
import GridContainer from "../component/GridContainer";
import svc from '/assets/svcPlaceholder.jpg' 

const Services = () => {
    return ( 
        <GridContainer>
            <PageHeader
                title={'Services'}
                description={'Here is a list of things we do'}
            />
            <GridItem 
                colStart={{base: 1, lg: 3}} colEnd={{base: 13, lg:12}}
                rowStart={4} rowEnd={11}>
            
            
                <Flex 
                    height='full'
                    direction={{base:'column', lg:'row'}}
                    justify='space-between'
                    >
                        <Card imagesrc={svc} title={'Service'} text={"text"}/>
                        <Card imagesrc={svc} title={'Service'} text={'yeet'}/>
                        <Card imagesrc={svc} title={'Service'} text={'yeet'}/>
                </Flex>
            </GridItem>      
           
        </GridContainer>
     );
}
 
export default Services;