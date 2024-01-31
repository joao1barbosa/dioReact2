import { ChakraProvider, Input } from "@chakra-ui/react";

interface InputPlaceProps{
    placeholder: string
    type: string
    onChange: any;
}

export const InputPlace = (props: InputPlaceProps) => {
    return(
      <ChakraProvider>
        <Input 
          width='100%' 
          marginTop='10px' 
          placeholder={props.placeholder} 
          type={props.type}
          onChange={(event)=>{props.onChange(event.target.value)}}
        />
      </ChakraProvider>
    )
  }