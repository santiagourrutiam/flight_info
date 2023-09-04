import axios from 'axios';

const droneflightApi = axios.create({
    baseURL:'http://127.0.0.1:8000/droneflights/api/droneflights/'
})

export const getAllDroneFlights = () => droneflightApi.get('/');
export const getDroneFlight = (id) => droneflightApi.get(`/${id}/`);
export const createDroneFlight = (droneflight) => droneflightApi.post('/', droneflight);
export const deleteDroneFlight = (id) => droneflightApi.delete(`/${id}`);
export const updateDroneFlight = (id, droneflight) => droneflightApi.put(`/${id}/`, droneflight);
