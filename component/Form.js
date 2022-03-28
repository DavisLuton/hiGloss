import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Textarea, VStack} from '@chakra-ui/react';

const Form=()=> {
  const [state, handleSubmit] = useForm("contact");
  if (state.succeeded) {
      return <p>Thanks!!</p>;
  }
  return (

      <VStack 
        direction='column'
        alignItems='start'
        spacing='2em'
        p='5' 
        borderWidth='1px' 
        borderColor='gray.200' 
        borderRadius='lg'  
        w='full' 
        h='full'>
        {/* <form onSubmit={handleSubmit} method="POST"> */}
    

        <FormControl>
          <FormLabel htmlFor='email'>Email Address:</FormLabel>
          <Input 
            id='email' 
            type='email' 
            placeholder='Your email'/>      
        </FormControl>
        
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      
      <FormControl>
          <FormLabel htmlFor='email'>Message:</FormLabel>
          <Textarea 
            
            id='message'  
            placeholder='Tell us things.'/>      
        </FormControl>
        

        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
      {/* </form> */}
    </VStack>
  );
}
export default Form;