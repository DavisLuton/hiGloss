import { background, extendTheme } from "@chakra-ui/react";



const Theme = extendTheme({
        styles:{
            global: {
               
            },
        },
        fonts:{
            heading: "Open Sans, sans-serif",
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

            Navbar:{
                
            },

            Heading:{
                baseStyle: {
                    lineHeight: 'taller',
                       
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

      

        colors: {
            brand: '#2a2576',
            contrast: '#d76e90',
           
            
        }

    
    });

export default Theme;