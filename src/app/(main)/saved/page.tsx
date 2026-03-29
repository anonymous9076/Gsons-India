"use client";

import React from 'react';
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { useSaved } from "@/context/SavedContext";
import { useAuth } from "@/context/AuthContext";
import Link from 'next/link';
import { Heart, Lock, ArrowRight, Bookmark } from "lucide-react";

export default function SavedPage() {
    const { savedProducts, loading: savedLoading } = useSaved();
    const { isAuthenticated, loading: authLoading } = useAuth();

    if (authLoading || savedLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6]">
                <div className="w-12 h-12 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                <p className="text-[10px]  text-slate-400  tracking-[0.3em] mt-6">Retrieving Archive</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-48">
                <div className="container-custom">
                    <div className="text-center py-32 flex flex-col items-center max-w-2xl mx-auto space-y-10">
                        <div className="relative group">
                            <div className="w-32 h-32 bg-white rounded-4xl flex items-center justify-center shadow-luxe transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                                <Lock className="w-12 h-12 text-slate-200" />
                            </div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-luxe-lg transform -rotate-12 group-hover:rotate-0 transition-transform">
                                <Bookmark className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-4xl  text-slate-900 font-display tracking-tight ">Access Restricted</h3>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed">
                                Curate your personal architectural archive. Authenticate your profile to preserve and manage your favorite selections across devices.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-8">
                            <Link
                                href="/auth/login"
                                className="bg-slate-900 text-white px-12 py-6 rounded-2xl  text-xs  tracking-widest hover:bg-primary transition-all shadow-luxe-lg flex items-center gap-4 group"
                            >
                                Verify Identity
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                            </Link>
                            <Link
                                href="/products"
                                className="bg-white text-slate-900 px-12 py-6 rounded-2xl  text-xs  tracking-widest border border-slate-100 hover:border-primary transition-all shadow-luxe"
                            >
                                Explore Gallery
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FAF9F6] min-h-screen pt-10 pb-15">
            <div className="container-custom">

                {savedProducts.length === 0 ? (
                    <div className="text-center py-32 flex flex-col items-center max-w-2xl mx-auto space-y-10">
                        <div className="relative group">
                            <div className="w-32 h-32 bg-white rounded-4xl border border-dashed border-slate-200 flex items-center justify-center transition-all duration-1000 group-hover:border-primary group-hover:rotate-12">
                                <Heart className="w-12 h-12 text-slate-100 group-hover:text-primary/20 transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-4xl  text-slate-900 font-display tracking-tight ">Empty Dossier</h3>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed">
                                Your personal architectural workspace is currently silent. Explore the main collection to archive pieces for your upcoming projects.
                            </p>
                        </div>

                        <Link
                            href="/products"
                            className="bg-primary text-white px-12 py-6 rounded-2xl  text-xs  tracking-widest hover:bg-slate-900 transition-all shadow-luxe-lg flex items-center gap-4 group"
                        >
                            Explore Global Collection
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </div>
                ) : (
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {savedProducts.map((product, idx) => (
                            <ProductCard
                                key={product._id || idx}
                                _id={product._id}
                                name={product.name}
                                price={Number(product.price)}
                                originalPrice={product.originalPrice ? Number(product.originalPrice) : undefined}
                                images={product.images}
                                category={product.category}
                                isSale={product.isSale}
                                rating={product.rating}
                                reviews={product.reviews}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
