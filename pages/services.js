import { Spacer, Flex, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Card from "../component/Card";
import PageHeader from "../component/PageHeader";
import GridContainer from "../component/GridContainer";
import svc from '/assets/svcPlaceholder.jpg' 
import screen from '/assets/screen.png'
import exterior from '/assets/exterior.png'

const Services = () => {
    return ( 
        <GridContainer>
            <PageHeader
                title={'Services'}
                
            />
            <GridItem 
                colStart={{base: 2, lg: 3}} colEnd={{base: 12, lg:12}}
                rowStart={{base:5, md:4}} rowEnd={11}>
            
            
                <SimpleGrid columns= {{base:1, md: 3}}
                    
                    
                    >
                        <Card imagesrc={svc} title={'Office Cleaning'} text={"Dusting, washrooms, vacuuming/mopping, garbage/recycling, windows.  Bi-Weekly, Weekly, or Monthly."}/>
                        <Card imagesrc={exterior} title={'Window Cleaning'} text={'Exterior and interior.  Pure water streak less window cleaning  up to 3 stories.'}/>
                        <Card imagesrc={screen} title={'Screen Cleaning'} text={'We can remove pesky dirt and other obstructions from your screen door with our specialized equipment.'}/>
                </SimpleGrid>
            </GridItem>      
           
        </GridContainer>
     );
}
 
export default Services;