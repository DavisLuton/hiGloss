import { Container, Flex, GridItem, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/dist/client/image";
import face from "/assets/facePlaceholder.jpg"
import PageHeader from "../component/PageHeader";
import FlexContainer from "../component/FlexContainer";


const About = () => {
    return ( 
            <FlexContainer>
                <PageHeader
                    title={'About Us'}
                />
            <GridItem 
                colStart={{base: 2, lg: 3}} colEnd={{base: 12, lg: 6}}
                rowStart={{base: 6, lg: 5}} rowEnd={10}>
                
                
                
                
            
                    <Text fontSize='lg'>
                    Vel asperiores quia hic praesentium itaque eum quasi suscipit hic maxime quos sed autem quaerat 33 suscipit doloribus ut possimus voluptates. Non voluptatem deserunt eum dicta soluta ut quia repudiandae est corporis enim aut dignissimos omnis temporibus assumenda qui unde optio.

    Qui molestiae temporibus ea accusantium accusantium est nisi voluptatem qui pariatur voluptatem ex amet aperiam At sint quaerat. Aut mollitia libero aut galisum suscipit et laborum dolor vel fuga itaque?

    Sit voluptas eius est recusandae accusantium aut nulla atque ad neque harum aut similique voluptate sed officia adipisci et nostrum error. Et internos magnam et iste accusantium et consequatur rerum ut tenetur unde et earum autem. Sit totam beatae nam quia laborum ea doloremque fuga et placeat voluptatibus et animi praesentium sit dolores nemo. Est alias molestiae et soluta consequatur ut sunt architecto aut sint libero quo praesentium quos ut voluptatem praesentium et amet maiores.

    Eos nihil culpa et quia tempora sed assumenda recusandae ea labore quaerat tempore nostrum At animi obcaecati non fugit molestiae. Eos officia dicta et corrupti explicabo et repudiandae dolore sit dolorem nostrum At galisum voluptas. Ut esse internos ut quibusdam sunt et vitae aliquid sit magni illo?
                    </Text>
                    
                
                
            </GridItem>
            <GridItem 
                colStart={{base:2, lg:7}} colEnd={12}
                rowStart={5}>
            <Image src={face}/>
            </GridItem>
            
            </FlexContainer>
     );
}
 
export default About