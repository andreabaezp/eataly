import axios from 'axios';

const api = axios.create({
    baseURL: 'http://46.101.137.166:3000/'
})

export default api;