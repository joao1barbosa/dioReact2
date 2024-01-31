import { ChakraProvider, Button } from "@chakra-ui/react";

interface ButtonSubmitProps{
  onClick: () => void;
}

export const ButtonSubmit = (props:ButtonSubmitProps) => {
    return(
      <ChakraProvider>
        <Button onClick={props.onClick} colorScheme='teal' size='sm' width='100%' marginTop='7px'>
          Login
        </Button>
      </ChakraProvider>
    )
  }