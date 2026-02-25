import axios, { AxiosError } from "axios";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

// Normalize API errors into a readable message
apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ message?: string }>) => {
        const message =
            error.response?.data?.message ||
            error.message ||
            "An unexpected error occurred";
        return Promise.reject(new Error(message));
    }
);

export default apiClient;
