import {useEffect, useMemo, useState} from "react";
import PropTypes from "prop-types";
import AuthContext from "src/context/AuthContext.jsx";
import {tokenUtils} from "src/utils/token.js";

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({
        isLoggedIn: false,
    });
    const [loading, setLoading] = useState(true);

    const handleUserChange = (name, email) => {
        setUser({
            name,
            email,
            isLoggedIn: true,
        });
    }

    const handleUserStatusChange = () => {
        setUser ((prevState) => ({
            ...prevState,
            isLoggedIn: true,
        }))
    }

    const contextMemo = useMemo(
        () => ({ user, handleUserChange,loading, handleUserStatusChange}),
        [user]
    );

    useEffect(() => {
        const checkAuth = () => {
            setLoading(true);

            const token = tokenUtils.get();

            if (token) {
                const name = localStorage.getItem('name');
                const email = localStorage.getItem('email');
                handleUserChange(name, email);
            }

            setLoading(false);
        };

        checkAuth();
    }, [user]);

    return (
        <AuthContext.Provider value={contextMemo}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};