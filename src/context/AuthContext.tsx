"use client";

import React, { createContext, useContext } from "react";
import { getMe, loginUser, logoutUser, registerUser, LoginData } from "@/services/userApi";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    avatar?: {
        url: string;
    };
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (userData: LoginData) => Promise<void>;
    register: (formData: FormData) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        retry: false,
    });

    const user = data?.success ? data.user : null;
    const isAuthenticated = !!user;

    const loginMutation = useMutation({
        mutationFn: loginUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["me"] });
        },
    });

    const registerMutation = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["me"] });
        },
    });

    const logoutMutation = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            queryClient.setQueryData(["me"], null);
            queryClient.invalidateQueries({ queryKey: ["me"] });
        },
    });

    const login = async (userData: LoginData) => {
        await loginMutation.mutateAsync(userData);
    };

    const register = async (formData: FormData) => {
        await registerMutation.mutateAsync(formData);
    };

    const logout = async () => {
        await logoutMutation.mutateAsync();
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            loading: isLoading,
            login,
            register,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
