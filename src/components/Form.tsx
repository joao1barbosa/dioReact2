import { ChakraProvider, Box, Center, Heading } from "@chakra-ui/react";
import { ButtonSubmit } from "./ButtonSubmit";
import { InputPlace } from "./InputPlace";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { changeLocalStorage } from "../services/storage";
import { IDioBank } from "../services/storage";

export const Form = () => {
  const [ email, setEmail ] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setUserInfo } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
      const userInfo = await login(email, password);
      
      if(!Object.values(userInfo).length){
          return alert('Email ou senha inválidos');
      }

      const userConverted: IDioBank = {
        user: userInfo
      }

      setUserInfo(userInfo);
      changeLocalStorage(userConverted);
      navigate('/conta/1');
  }

  return (
    <ChakraProvider>
        <Center>
            <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width={['90%', '60%', '40%']}>
                <Center flexDirection='column' width='100%' padding='0px 5%' justifyContent='center' alignContent='center'>
                    <Heading as='h1' fontSize='24px' paddingBottom='5px'>Faça login</Heading>
                    <InputPlace placeholder="email" type="email" onChange={setEmail}/>
                    <InputPlace placeholder="password" type="password" onChange={setPassword}/>
                    <ButtonSubmit onClick={()=>validateUser(email, password)}/>
                </Center>
            </Box>
        </Center>
    </ChakraProvider>
  );
}