import axios from 'axios';
import { baseURL } from '../API/endpoint';

export const axiosInstance = axios.create({
    baseURL,
});

const profilePicBaseUrl = 'https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/';

const profile_Url = (media) => {
    return `${profilePicBaseUrl}${media}`;
};

// Interceptor to add authentication token to request headers
axiosInstance.interceptors.request.use(
    async function(config) {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token) {
            config.headers['x-access-token'] = token;
        }
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);

export default profile_Url;
