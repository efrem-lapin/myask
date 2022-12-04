import axios from "axios";
import Token from './../services/token';

const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_HOST
});

$api.interceptors.request.use((config) => {
    const token = Token.getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default $api;