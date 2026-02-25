"use client";

import React from "react";

interface LoaderProps {
    fullPage?: boolean;
    size?: "sm" | "md" | "lg";
    text?: string;
}

const Loader: React.FC<LoaderProps> = ({
    fullPage = false,
    size = "md",
    text = "Loading..."
}) => {
    const sizeClasses = {
        sm: "w-6 h-6 border-2",
        md: "w-10 h-10 border-4",
        lg: "w-16 h-16 border-4",
    };

    const containerClasses = fullPage
        ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-white backdrop-blur-sm"
        : "flex flex-col items-center justify-center p-4";

    return (
        <div className={containerClasses}>
            <div className="relative">
                {/* Outer Ring */}
                <div className={`${sizeClasses[size]} border-gray-100 rounded-full`}></div>
                {/* Animated Ring */}
                <div className={`${sizeClasses[size]} border-primary border-t-transparent rounded-full animate-spin absolute inset-0`}></div>
            </div>
            {text && (
                <p className={`mt-4 font-medium text-gray-600 ${size === 'sm' ? 'text-xs' : 'text-sm'} animate-pulse`}>
                    {text}
                </p>
            )}
        </div>
    );
};

export default Loader;
