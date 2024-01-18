import API from "./api";

const GROUP_DEFAULT_URL = "users";

export const login = async (payload) => {
    return await API.post(`${GROUP_DEFAULT_URL}/login`, payload);
};
