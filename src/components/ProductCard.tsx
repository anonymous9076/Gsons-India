"use client";

import { Heart, Plus, Star } from "lucide-react";
import { useSaved } from "@/context/SavedContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/utils/formatters";
import type { Product } from "@/types/product";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function ProductCard({ _id, name, price, images, productId, sku, rating, reviews, isNew, isSale, variantId }: Product & { productId?: string, sku?: string, rating?: number, reviews?: number, isNew?: boolean, isSale?: boolean, variantId?: string }) {
    const { toggleSave, isSaved } = useSaved();
    const { isAuthenticated } = useAuth();
    const targetId = variantId || productId || _id;
    const saved = isSaved(targetId);

    const imageUrl = images?.[0]?.url || "/logo.png";

    return (
        <div className="group relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 border border-slate-100 shadow-luxe">
            {/* Top Section: Gradient + Image */}
            <div className="relative aspect-square bg-linear-to-br from-primary/10
             via-primary/10 to-white overflow-hidden">
                {/* Heart Button */}
                {isAuthenticated && (
                    <button
                        onClick={(e) => { e.preventDefault(); toggleSave(targetId); }}
                        className={cn(
                            "absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                            saved ? "bg-primary text-white scale-110 shadow-lg shadow-primary/40" : "bg-white/10 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/20 border border-white/10"
                        )}
                    >
                        <Heart className={cn("w-3.5 h-3.5", saved && "fill-current")} />
                    </button>
                )}

                {/* Floating Image */}
                <Link href={`/products/${targetId}`} className="block w-full h-full p-4">
                    <div className="w-full h-full relative transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-full object-contain drop-shadow-2xl  brightness-110"
                        />
                    </div>
                </Link>
            </div>

            {/* Bottom Section: Details */}
            <div className="p-4 md:p-5 flex flex-col bg-white rounded-t-3xl -mt-6 relative z-10 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)] grow">
                {/* Info Container */}
                <div className="space-y-2 grow">
                    <Link href={`/products/${targetId}`} className="block group/title">
                        <h3 className="text-sm  text-slate-900 tracking-tight line-clamp-1 transition-colors group-hover/title:text-primary">
                            {name}
                        </h3>
                    </Link>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-lg text-[8px]   tracking-widest text-slate-500">
                            {sku || "ARCHIVE"}
                        </span>
                        {(rating || reviews) && (
                            <span className="px-2 py-0.5 bg-orange-50 border border-orange-100 rounded-lg text-[8px]   tracking-widest text-primary flex items-center gap-1">
                                <Star className="w-2.5 h-2.5 fill-current" /> {rating || "5.0"}
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-[13px] font-medium leading-relaxed line-clamp-2">
                        Architectural precision meets high-performance. Minimalist construction with refined detailing and sleek aesthetics.
                    </p>
                </div>

                {/* Footer: Price + Button */}
                <div className="flex items-end justify-between mt-4  border-t border-slate-50">
                    <div className="space-y-0.5">
                        <span className="text-[9px]   tracking-[0.2em] text-slate-300 block">Price</span>
                        <p className="text-base  text-slate-900 tracking-tighter">{formatPrice(price)}</p>
                    </div>

                    <button className="px-4 py-2 bg-primary/60 text-white rounded-xl text-[9px]   tracking-widest hover:bg-primary transition-all shadow-lg active:scale-95 flex items-center gap-2 group/btn">
                        <span>Shop</span>
                        <Plus className="w-3 h-3 transition-transform group-hover/btn:rotate-90" />
                    </button>
                </div>
            </div>
        </div>
    );
}
