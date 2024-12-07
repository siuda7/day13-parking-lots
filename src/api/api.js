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

export const parkCar = async (carPlate, strategy) => {
    try {
        const response = await api.post('/park', { carPlate, strategy });
        return response.data;
    } catch (error) {
        console.error('Error parking car:', error);
        throw error;
    }
};

export const fetchCar = async (carPlate) => {
    try {
        const response = await api.get(`/fetch/${carPlate}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching car:', error);
        throw error;
    }
};

export default api;