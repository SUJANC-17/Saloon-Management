const TOKEN_KEY = "salon_jwt";

const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
const getToken = () => localStorage.getItem(TOKEN_KEY);
const clearToken = () => localStorage.removeItem(TOKEN_KEY);

const tokenService = { setToken, getToken, clearToken };
export default tokenService;
