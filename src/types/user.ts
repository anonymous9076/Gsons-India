export interface User {
    _id: string;
    name: string;
    email: string;
    role: "user" | "admin";
    avatar?: { url: string };
}

export interface LoginData {
    email: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    user: User;
    message?: string;
}
