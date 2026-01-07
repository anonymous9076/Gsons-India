"use client";

import React from 'react';
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { useSaved } from "@/context/SavedContext";
import { useAuth } from "@/context/AuthContext";
import Link from 'next/link';

export default function SavedPage() {
    const { savedProducts } = useSaved();
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <section className="py-16 bg-white min-h-[60vh]">
                <div className="container-custom">
                    <SectionHeading title="Your Saved Products" />
                    <div className="text-center py-20 flex flex-col items-center">
                        <div className="bg-orange-50 rounded-full p-8 mb-6">
                            <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m11-3V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h11" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Please log in</h3>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            You need to be logged in to see your saved products.
                        </p>
                        <Link
                            href="/auth/login"
                            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                        >
                            Log In / Register
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-white min-h-[60vh]">
            <div className="container-custom">
                <SectionHeading title="Your Saved Products" />

                {savedProducts.length === 0 ? (
                    <div className="text-center py-20 flex flex-col items-center">
                        <div className="bg-gray-50 rounded-full p-8 mb-6">
                            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No saved products yet</h3>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            Start exploring our collection and save your favorite products to see them here.
                        </p>
                        <Link
                            href="/products"
                            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                        >
                            Explore All Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {savedProducts.map((product, idx) => (
                            <ProductCard key={idx} {...product} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
