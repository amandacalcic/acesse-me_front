import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.15.18:3333',
    baseURL: 'https://acesseme.herokuapp.com/'
});

export default api;