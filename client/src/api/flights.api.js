import axios from 'axios';

const flightApi = axios.create({
    baseURL:'http://127.0.0.1:8000/flights/api/flights/'
})

export const getAllFlights = () => flightApi.get('/');
export const getFlight = (id) => flightApi.get(`/${id}/`);
export const createFlight = (flight) => flightApi.post('/', flight);
export const deleteFlight = (id) => flightApi.delete(`/${id}`);
export const updateFlight = (id, flight) => flightApi.put(`/${id}/`, flight);
