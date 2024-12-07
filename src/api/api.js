// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/parkinglot',
});

export const fetchParkingLots = async () => {
    try {
        const response = await api.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching parking lots:', error);
        throw error;
    }
};

export default api;