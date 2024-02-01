import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { Conta } from "./pages/Conta";

const MainRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/conta/:id' element={ <Conta/> } />
        </Routes>
    )
}

export default MainRoutes;