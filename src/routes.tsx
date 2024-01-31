import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AppContext } from "./components/AppContext"
import Home from "./pages/Home";
import Conta from "./pages/Conta";

const MainRoutes = () => {
    const { userInfo } = useContext(AppContext);

    // console.log(!Object.values(userInfo).length, userInfo);

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={ !Object.values(userInfo).length ? <Conta /> : <Home/> } />
        </Routes>
    )
}

export default MainRoutes