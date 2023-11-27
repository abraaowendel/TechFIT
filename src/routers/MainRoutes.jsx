import { Navigate, Route, Routes } from "react-router-dom";
import { isLogged } from "../helpers/auth/AuthHandler";
import Home from "../pages/Home";
import Login from "../pages/Login";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/entrar" element={<Login/>} />
        </Routes>
    );
}
export default MainRoutes;  