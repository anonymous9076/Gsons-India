"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface Product {
    name: string;
    price: string;
    originalPrice?: string;
    rating: number;
    reviews: number;
    isSale?: boolean;
    image: string;
}

interface SavedContextType {
    savedProducts: Product[];
    toggleSave: (product: Product) => void;
    isSaved: (productName: string) => boolean;
}

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, isAuthenticated } = useAuth();
    const [savedProducts, setSavedProducts] = useState<Product[]>([]);

    const storageKey = user ? `gsons_saved_products_${user._id}` : null;

    useEffect(() => {
        if (isAuthenticated && storageKey) {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                try {
                    setSavedProducts(JSON.parse(saved));
                } catch (error) {
                    console.error("Error parsing saved products:", error);
                }
            }
        } else if (!isAuthenticated) {
            setSavedProducts([]);
        }
    }, [isAuthenticated, storageKey]);

    useEffect(() => {
        if (isAuthenticated && storageKey) {
            localStorage.setItem(storageKey, JSON.stringify(savedProducts));
        }
    }, [savedProducts, isAuthenticated, storageKey]);

    const toggleSave = (product: Product) => {
        if (!isAuthenticated) return;

        setSavedProducts(prev => {
            const exists = prev.find(p => p.name === product.name);
            if (exists) {
                return prev.filter(p => p.name !== product.name);
            } else {
                return [...prev, product];
            }
        });
    };

    const isSaved = (productName: string) => {
        if (!isAuthenticated) return false;
        return savedProducts.some(p => p.name === productName);
    };

    return (
        <SavedContext.Provider value={{ savedProducts, toggleSave, isSaved }}>
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
