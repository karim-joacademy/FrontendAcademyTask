import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../../../FrontendAcademyTask/src/components/Home";
import Register from "../../../FrontendAcademyTask/src/pages/auth/Register";
import Login from "../../../FrontendAcademyTask/src/pages/auth/Login";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes