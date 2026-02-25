"use client";

import { Heart } from "lucide-react";
import { useSaved } from "@/context/SavedContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/utils/formatters";
import type { Product } from "@/types/product";
import Link from "next/link";

export default function ProductCard({ _id, name, price, images, productId, sku }: Product & { productId?: string, sku?: string }) {
    const { toggleSave, isSaved } = useSaved();
    const { isAuthenticated } = useAuth();
    const targetId = productId || _id;
    const saved = isSaved(targetId);

    const imageUrl = images?.[0]?.url || "/placeholder.png";

    return (
        <div className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-shadow group relative">
            {/* Save Button */}
            {isAuthenticated && (
                <button
                    onClick={(e) => { e.preventDefault(); toggleSave(targetId); }}
                    aria-label={saved ? "Unsave product" : "Save product"}
                    className={`absolute top-4 right-4 z-20 p-2 rounded-full shadow-md transition-all duration-300 ${saved ? "bg-red-50 text-red-500" : "bg-white text-gray-500 hover:text-red-500"
                        }`}
                >
                    <Heart className={`w-5 h-5 ${saved ? "fill-current" : ""}`} />
                </button>
            )}

            {/* Card Link */}
            <Link href={`/products/${targetId}`} className="block">
                <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden p-4">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                            View Details
                        </span>
                    </div>
                </div>

                <div className="space-y-1">
                    {sku && (
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">
                            {sku}
                        </span>
                    )}
                    <h3 className="font-medium text-gray-900 line-clamp-2 min-h-[3rem] text-sm leading-snug">{name}</h3>
                    <p className="font-black text-gray-900 text-lg">{formatPrice(price)}</p>
                </div>
            </Link>
        </div>
    );
}
