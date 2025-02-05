import {useContext} from "react";
import AuthContext from "src/context/AuthContext.jsx";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;