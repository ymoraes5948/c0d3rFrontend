import axios from 'axios';

const api = axios.create({
    baseURL:  "http://c0d3rbackend.herokuapp.com",
});

export default api;