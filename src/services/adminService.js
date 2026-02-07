import axios from 'axios';
import tokenService from './tokenService';

const API_URL = 'http://localhost:8080/api/admin';

const getHeaders = () => ({
    headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
    },
});

const getPendingSalons = async () => {
    const response = await axios.get(`${API_URL}/salons/pending`, getHeaders());
    return response.data;
};

const approveSalon = async (salonId) => {
    const response = await axios.post(`${API_URL}/salons/${salonId}/approve`, {}, getHeaders());
    return response.data;
};

const rejectSalon = async (salonId) => {
    const response = await axios.post(`${API_URL}/salons/${salonId}/reject`, {}, getHeaders());
    return response.data;
};

const getAllUsers = async () => {
    const response = await axios.get(`${API_URL}/users`, getHeaders());
    return response.data;
};

const getAllSalons = async () => {
    const response = await axios.get(`${API_URL}/salons`, getHeaders());
    return response.data;
};

const getAllBookings = async () => {
    const response = await axios.get(`${API_URL}/bookings`, getHeaders());
    return response.data;
};

const adminService = {
    getPendingSalons,
    approveSalon,
    rejectSalon,
    getAllUsers,
    getAllSalons,
    getAllBookings,
};

export default adminService;
