const tokenKey = "token";

export const tokenUtils = {

    get: () => localStorage.getItem(tokenKey) || null,

    remove: () => localStorage.removeItem(tokenKey),

    set: (token) => {
        localStorage.setItem(tokenKey, token);
    },
};