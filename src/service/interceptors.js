import axios from "axios";
import { tokenUtils } from "../utils/token";

const api = axios.create();

api.interceptors.response.use(( response) => {
    if (response?.data?.token) {
        const  token  = response.data.token;
        tokenUtils.set(token);

        localStorage.setItem('name', response.data.user.name);
        localStorage.setItem('email', response.data.user.email);
    }
    return response;
});

api.interceptors.request.use(async (config) => {
    const token = tokenUtils.get();

    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default api;