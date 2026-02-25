"use client";

import { Heart, ShoppingBag, Star } from "lucide-react";
import { useSaved } from "@/context/SavedContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/utils/formatters";
import type { Product } from "@/types/product";
import Link from "next/link";

export default function ProductCard({ _id, name, price, images, productId, sku, rating, reviews, isNew, isSale, variantId }: Product & { productId?: string, sku?: string, rating?: number, reviews?: number, isNew?: boolean, isSale?: boolean, variantId?: string }) {
    const { toggleSave, isSaved } = useSaved();
    const { isAuthenticated } = useAuth();
    const targetId = variantId || productId || _id;
    const saved = isSaved(targetId);

    const imageUrl = images?.[0]?.url || "/placeholder.png";

    return (
        <div className="bg-white rounded-4xl border border-gray-100 p-2 hover:shadow-2xl transition-all duration-500 group relative flex flex-col h-full bg-linear-to-b from-white to-gray-50/30">
            {/* Badges Container */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                {isNew && (
                    <span className="bg-gray-900 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg tracking-wider">NEW</span>
                )}
                {isSale && (
                    <span className="bg-primary text-gray-900 text-[10px] font-black px-3 py-1 rounded-full shadow-lg tracking-wider">SALE</span>
                )}
            </div>

            {/* Save Button */}
            {isAuthenticated && (
                <button
                    onClick={(e) => { e.preventDefault(); toggleSave(targetId); }}
                    aria-label={saved ? "Unsave product" : "Save product"}
                    className={`absolute top-4 right-4 z-20 p-2.5 rounded-2xl shadow-xl transition-all duration-300 backdrop-blur-md ${saved ? "bg-red-500 text-white" : "bg-white/80 text-gray-500 hover:text-red-500 hover:bg-white"
                        }`}
                >
                    <Heart className={`w-5 h-5 ${saved ? "fill-current" : ""}`} />
                </button>
            )}

            {/* Product Image Area */}
            <Link href={`/products/${targetId}`} className="block overflow-hidden rounded-3xl relative aspect-square bg-gray-50">
                <div className="w-full h-full p-6 flex items-center justify-center relative z-10">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="bg-white text-gray-900 px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                        <ShoppingBag size={18} />
                        Quick View
                    </div>
                </div>
            </Link>

            {/* Product Details */}
            <div className="p-4 flex flex-col grow">
                <div className="flex items-center justify-between mb-2">
                    {sku ? (
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                            {sku}
                        </span>
                    ) : (
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                            GSONS ELITE
                        </span>
                    )}

                    <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-[10px] font-bold text-gray-700">{rating || 5.0}</span>
                    </div>
                </div>

                <Link href={`/products/${targetId}`} className="group/title">
                    <h3 className="font-bold text-gray-900 line-clamp-2 min-h-[2.8rem] text-sm leading-tight mb-3 group-hover/title:text-primary transition-colors">
                        {name}
                    </h3>
                </Link>

                <div className="mt-auto flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-500 font-medium mb-0.5">Price</p>
                        <p className="font-black text-gray-900 text-xl tracking-tight leading-none">{formatPrice(price)}</p>
                    </div>

                    <button className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-all duration-300 shadow-lg active:scale-95">
                        <ShoppingBag size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
