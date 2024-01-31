import { Box } from "@chakra-ui/react"
import { Header } from "./Header"

export const Layout = ({ children }: any ) => {
  return(
      <Box height='100vh' width='100wh' backgroundColor='#9413dc' padding='25px'>
        <Header/>
        { children }
      </Box>
  )
}