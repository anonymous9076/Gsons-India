import API from "./api";

export interface LoginData {
    email: string;
    password: string;
}

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

export const forgotPassword = async (email: string) => {
    const { data } = await API.post("/password/forgot", { email });
    return data;
};

export const resetPassword = async ({ token, passwords }: { token: string; passwords: any }) => {
    const { data } = await API.put(`/password/reset/${token}`, passwords);
    return data;
};

export const updatePassword = async (passwordData: any) => {
    const { data } = await API.put("/password/update", passwordData);
    return data;
};

export const updateProfile = async (profileData: FormData) => {
    const { data } = await API.put("/me/update", profileData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
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
