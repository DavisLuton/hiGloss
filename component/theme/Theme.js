import { background, extendTheme } from "@chakra-ui/react";



const Theme = extendTheme({
        styles:{
            global: {
               
            },
        },
        fonts:{
            heading: "Raleway, sans-serif",
            body: "Raleway, sans-serif",
        },





        //component-specific overwrites:
        components: {
            Text: {
                baseStyle: {
                    fontWeight: 'light',
                    lineHeight: 'tall',
                    color: 'gray.800',
                },
            },

            Heading:{
                baseStyle: {
                    lineHeight: 'taller',
                    fontWeight:'bold'   
                },
            },

            Link: {
                baseStyle:{
                    _hover: {color: 'gray.500'},
                    _focus:{textDecoration:'underline'}
                }
            },

            MenuItem: {
                baseStyle:{
                    isFocusable:'false',
                }
            },

            IconButton: {
                baseStyle:{
                    background:'none',
                    variant: 'ghost'
                }
            },

            
        },

        textStyles:{
            hero:{
                fontWeight: 'bold', 
                fontSize: '8rem'
            }
        },

        colors: {
            brand: '#58c1e6'
        }

    
    });

export default Theme;