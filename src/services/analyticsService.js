import axios from 'axios';
import tokenService from './tokenService';

const API_URL = 'http://localhost:8080/api/analytics';

const getHeaders = () => ({
    headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
    },
});

const getPlatformStats = async () => {
    const response = await axios.get(`${API_URL}/platform-stats`, getHeaders());
    return response.data;
};

const analyticsService = {
    getPlatformStats,
};

export default analyticsService;
