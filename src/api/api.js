import axios from "axios";

const API = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: "http://localhost:3001",
});

API.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

API.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        if (error.response && error.response.status === 401) {
            console.error(error.response.data.error);
        }
        throw error;
    }
);

export default API;
