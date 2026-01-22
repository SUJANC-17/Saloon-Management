import axios from "axios";
import tokenService from "./tokenService";

const API_URL = "http://localhost:8080/api/auth";

const login = async (data) => {
  const res = await axios.post(`${API_URL}/login`, data);
  tokenService.setToken(res.data.token);
  return res.data;
};

const signup = async (data) => axios.post(`${API_URL}/register`, data);

const logout = () => tokenService.clearToken();

const forgotPassword = async (data) => {
  return axios.post(`${API_URL}/forgot-password`, data);
};

const resetPassword = async (data) => {
  return axios.post(`${API_URL}/reset-password`, data);
};

const authService = { login, signup, logout, forgotPassword, resetPassword };
export default authService;
