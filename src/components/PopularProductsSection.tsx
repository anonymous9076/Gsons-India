"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { getAllVariants } from "@/services/variantApi";
import type { Product, Variant } from "@/types/product";
import * as productsData from "../data/products";

export default function PopularProductsSection() {
    const [popularVariants, setPopularVariants] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopular = async () => {
            try {
                const data = await getAllVariants("limit=8");
                const variants = Array.isArray(data.data) ? data.data : [];
                setPopularVariants(variants);
            } catch (error) {
                console.error("Failed to fetch popular variants:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPopular();
    }, []);

    const bestDeals = [
        {
            _id: "deal-1",
            name: "Premium Jhummer Crystal",
            price: 5200,
            rating: 0,
            reviews: 0,
            isSale: true,
            images: [{ url: productsData.jhummer[1] }]
        },
        {
            _id: "deal-2",
            name: "Fancy Strip Light LED",
            price: 2000,
            rating: 5,
            reviews: 5,
            images: [{ url: productsData.strip[1] }]
        },
        {
            _id: "deal-3",
            name: "Concealed Downlight 6W",
            price: 5000,
            rating: 4,
            reviews: 12,
            isSale: true,
            images: [{ url: productsData.concield[1] }]
        },
        {
            _id: "deal-4",
            name: "Waterproof Exterior Wall Lamp",
            price: 7000,
            rating: 3,
            reviews: 2,
            images: [{ url: productsData.fancyWall[1] }]
        }
    ];
    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <SectionHeading title="Popular On The Gsons Store." />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {loading ? (
                        [...Array(4)].map((_, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl h-64 animate-pulse"></div>
                        ))
                    ) : (
                        popularVariants.map((variant, idx) => {
                            const product = variant.productId;
                            return (
                                <ProductCard
                                    key={variant._id || idx}
                                    {...product}
                                    _id={product?._id}
                                    name={product?.name || "Premium Lighting"}
                                    price={variant.price}
                                    images={variant.images?.length > 0 ? variant.images : product?.images}
                                    sku={variant.sku}
                                    variantId={variant._id}
                                />
                            );
                        })
                    )}
                </div>

                {/* Promo Banner / Middle Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {/* Left Banner */}
                    <div className="bg-gray-900 rounded-4xl p-10 relative overflow-hidden text-white flex flex-col justify-end min-h-[350px] group cursor-pointer shadow-2xl">
                        <div className="absolute inset-0 transition-all duration-1000 group-hover:scale-110">
                            <img src={productsData.gate[5]} className="w-full h-full object-cover opacity-60" alt="Banner" />
                            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                        </div>
                        <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Expert Choice</span>
                            <h3 className="text-3xl font-bold mb-4 leading-tight">Chosen By <br /> Architects</h3>
                            <button className="text-sm font-semibold border-b-2 border-primary pb-1 group-hover:text-primary transition-colors">Discover the Collection</button>
                        </div>
                    </div>

                    {/* Middle Banner */}
                    <div className="bg-orange-50 rounded-4xl p-10 flex flex-col justify-center items-center text-center min-h-[350px] relative border border-orange-100 group">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-gray-900 mb-2">Carefully <br /> Crafted</h3>
                            <p className="text-sm text-gray-500 mb-8 font-medium">Sustainable & Elegant Lightings</p>
                            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-xl p-6 relative transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                                <img src={productsData.hanging[4]} className="w-full h-full object-contain" alt="Hanging" />
                                <div className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">NEW</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Banner */}
                    <div className="bg-primary rounded-4xl p-10 relative overflow-hidden text-white flex flex-col justify-center min-h-[350px] group cursor-pointer shadow-xl shadow-orange-500/20">
                        <div className="absolute inset-0 transition-all duration-1000 group-hover:scale-110">
                            <img src={productsData.wall[3]} className="w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Banner" />
                        </div>
                        <div className="relative z-10 text-center">
                            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-4">LIMITED TIME</div>
                            <h3 className="text-4xl font-black mb-4 leading-none">15% OFF <br /> <span className="text-2xl font-bold opacity-90 text-gray-900">Weekly Deals</span></h3>
                            <button className="bg-white text-gray-900 px-8 py-3 rounded-xl text-sm font-bold mt-4 shadow-xl hover:bg-gray-100 transition-all active:scale-95">Shop Now</button>
                        </div>
                    </div>
                </div>

                <SectionHeading title="Best Deals On The Gsons Store." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestDeals.map((product, idx) => (
                        <ProductCard key={`deal-${idx}`} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
