import axios from "axios";

export interface LoginData {
    email: string;
    password: string;
}

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/gsons",
    withCredentials: true,
});

// User API
export const registerUser = async (formData: FormData) => {
    const { data } = await API.post("/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

export const loginUser = async (userData: LoginData) => {
    const { data } = await API.post("/login", userData);
    return data;
};

export const logoutUser = async () => {
    const { data } = await API.get("/logout");
    return data;
};

export const getMe = async () => {
    const { data } = await API.get("/me");
    return data;
};

// Admin API
export const getAllUsers = async () => {
    const { data } = await API.get("/admin/users");
    return data;
};

export const deleteUser = async (id: string) => {
    const { data } = await API.delete(`/admin/user/${id}`);
    return data;
};

export default API;
