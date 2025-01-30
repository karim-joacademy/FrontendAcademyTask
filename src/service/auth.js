import api from "./interceptors";

export const register = async (registerData) => {
    try {
        const response = await api.post(`${import.meta.env.VITE_API_URL}/api/register`, registerData);
        return response.data;

    } catch(err){
        return {
            isError : true,
            message: err.response?.data?.message,
        };
    }
}

export const login = async (loginData) => {
    try {
        const response = await api.post(`${import.meta.env.VITE_API_URL}/api/login`, loginData);
        return response.data;

    } catch(err){
        return {
            isError : true,
            message: err.response?.data?.message,
        };
    }
}