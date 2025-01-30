import { jwtDecode } from "jwt-decode";

const tokenKey = "token";

export const tokenUtils = {

    decode: (token) => {
        try {
            return jwtDecode(token);
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    get: () => localStorage.getItem(tokenKey) || null,

    getDecoded: () => {
        const token = tokenUtils.get();
        return tokenUtils.decode(token);
    },

    remove: () => localStorage.removeItem(tokenKey),

    set: (token) => {
        localStorage.setItem(tokenKey, token);
    },
};