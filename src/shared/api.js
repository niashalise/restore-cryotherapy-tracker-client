import { getToken, clearSession } from "./tokenStorage";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const apiFetch = async (path, options = {}) => {
    const token = getToken();
    const headers = {
        "Content-Type": "application/json",
        ...options.headers
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${baseUrl}${path}`, {...options, headers});

    if (response.status === 401) {
        clearSession();

        if (window.location.pathname !== "/login")
        window.location.assign("/login");
    } 

    return response;
};