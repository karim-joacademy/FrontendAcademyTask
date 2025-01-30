import {useMemo, useState} from "react";
import PropTypes from "prop-types";
import AuthContext from "src/context/AuthContext.jsx";

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({
        isLoggedIn: false,
    });

    const handleUserChange = (name, email) => {
        setUser({
            name,
            email,
            isLoggedIn: true,
        });
    }

    const contextMemo = useMemo(
        () => ({ user, handleUserChange}),
        [user]
    );

    return (
        <AuthContext.Provider value={contextMemo}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};