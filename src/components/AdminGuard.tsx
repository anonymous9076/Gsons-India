"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

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
        return <Loader fullPage text="Verifying credentials..." />;
    }

    if (!isAuthenticated || user?.role !== "admin") {
        return null; // Prevents flashing of content while redirecting
    }

    return <>{children}</>;
};

export default AdminGuard;
