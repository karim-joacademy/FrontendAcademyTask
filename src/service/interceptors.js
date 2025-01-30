import axios from "axios";
import { tokenUtils } from "../utils/token";

const api = axios.create();

api.interceptors.response.use(( response) => {
    console.log("hello", response);
    if (response?.data?.token) {
        const { token } = response.data.token;
        tokenUtils.set(token);
    }
    return response;
});

api.interceptors.request.use(async (config) => {
    const token = tokenUtils.get();
    console.log(token);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default api;