"use client";

import React, { createContext, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getSavedItems, toggleSavedItem } from '@/services/savedApi';
import toast from 'react-hot-toast';

interface Product {
    _id: string;
    name: string;
    price: number | string;
    originalPrice?: string;
    rating?: number;
    reviews?: number;
    isSale?: boolean;
    images: { url: string }[];
    category?: string;
}

interface SavedContextType {
    savedProducts: any[];
    savedVariants: any[];
    toggleSave: (productId: string) => void;
    isSaved: (productId: string) => boolean;
    loading: boolean;
}

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated, user } = useAuth();
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ['savedItems', user?._id],
        queryFn: getSavedItems,
        enabled: isAuthenticated && !!user?._id,
    });

    const savedProducts: any[] = data?.data?.products || [];
    const savedVariants: any[] = data?.data?.variants || [];

    const toggleMutation = useMutation({
        mutationFn: toggleSavedItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['savedItems', user?._id] });
        },
    });

    const toggleSave = (productId: string) => {
        if (!isAuthenticated) {
            toast.error("Please login to save items");
            return;
        }
        const currentlySaved = isSaved(productId);
        toggleMutation.mutate(productId, {
            onSuccess: () => {
                toast.success(currentlySaved ? "Removed from wishlist" : "Added to wishlist");
            },
            onError: () => {
                toast.error("Failed to update wishlist");
            }
        });
    };

    const isSaved = (productId: string) => {
        if (!isAuthenticated) return false;
        
        // Check products
        const inProducts = savedProducts.some((p: any) => (p?._id || p) === productId);
        if (inProducts) return true;

        // Check variants
        const inVariants = savedVariants.some((v: any) => (v?._id || v) === productId);
        if (inVariants) return true;

        return false;
    };

    return (
        <SavedContext.Provider value={{ savedProducts, savedVariants, toggleSave, isSaved, loading: isLoading }}>
            {children}
        </SavedContext.Provider>
    );
};


export const useSaved = () => {
    const context = useContext(SavedContext);
    if (context === undefined) {
        throw new Error('useSaved must be used within a SavedProvider');
    }
    return context;
};
