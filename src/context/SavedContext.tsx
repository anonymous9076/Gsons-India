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
    savedProducts: Product[];
    toggleSave: (productId: string) => void;
    isSaved: (productId: string) => boolean;
    loading: boolean;
}

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ['savedItems'],
        queryFn: getSavedItems,
        enabled: isAuthenticated,
        initialData: { savedItems: [] } // Fallback
    });

    const savedProducts: Product[] = data?.savedItems || [];

    const toggleMutation = useMutation({
        mutationFn: toggleSavedItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['savedItems'] });
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
        return savedProducts.some((p: any) => p._id === productId || p.product?._id === productId);
        // Note: Backend might return populated 'product' field or just the product directly. 
        // Logic might need adjustment based on exact backend response. 
        // Assuming flat list of products for now based on 'getSavedItems' naming.
    };

    return (
        <SavedContext.Provider value={{ savedProducts, toggleSave, isSaved, loading: isLoading }}>
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
