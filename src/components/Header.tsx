import {  Box, Button, Center, ChakraProvider, Heading } from "@chakra-ui/react"
import { changeLocalStorage } from "../services/storage"
import { useContext} from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "./AppContext"

export const Header  = () => {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ user: {}});
    setUserInfo({});
    navigate('/');
  }

  return(
    <ChakraProvider>
      <Box display='grid' gridTemplateColumns='1fr 1fr 1fr'>
        <Box/>
        <Center>
          <Heading as='h1' size='3xl' color="#000000" paddingBottom="10">
            Dio Bank
          </Heading>
        </Center>
        <Box display='flex' flexDirection='row-reverse'>
          {
            !(Object.keys(userInfo).length === 0) && 
              (
                <>
                  <Button width='10%' alignSelf='flex-end' onClick={() => logout()}>
                    Sair
                  </Button>
                </>
              )
          }
        </Box>
      </Box>
    </ChakraProvider>
  )
}
