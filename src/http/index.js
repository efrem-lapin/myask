import axios from "axios";

const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_HOST
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('tocken')}`;
    return config;
});

export default $api;