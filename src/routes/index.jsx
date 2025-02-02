import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "src/pages/Home";
import Register from "src/pages/auth/Register";
import Login from "src/pages/auth/Login/index.jsx";
import useAuth from "src/hooks/useAuth.js";

function AppRoutes() {
    const { user } = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user.isLoggedIn ? <Home/> : <Login/>} />
                <Route path="/register" element={user.isLoggedIn ? <Navigate to={"/"}/> : <Register/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes