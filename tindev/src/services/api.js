import axios from 'axios';

const api = axios.create({
    baseURL: 'http://189.125.223.34:3333'
});

export default api;