"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface AdminGuardProps {
    children: React.ReactNode;
}

const AdminGuard: React.FC<AdminGuardProps> = ({ children }) => {
    const { user, isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!isAuthenticated) {
                router.push("/auth/login");
            } else if (user?.role !== "admin") {
                router.push("/");
            }
        }
    }, [user, isAuthenticated, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500 font-medium italic">Verifying credentials...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated || user?.role !== "admin") {
        return null; // Prevents flashing of content while redirecting
    }

    return <>{children}</>;
};

export default AdminGuard;
