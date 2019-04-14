import axios from 'axios';

const api = axios.create({
    baseURL:  "https://c0d3rbackend.herokuapp.com",
});

export default api;