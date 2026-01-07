"use client";

import { Star, Heart } from "lucide-react";
import { useSaved } from "@/context/SavedContext";
import { useAuth } from "@/context/AuthContext";

interface Product {
    name: string;
    price: string;
    originalPrice?: string;
    rating: number;
    reviews: number;
    isSale?: boolean;
    image: string;
}

export default function ProductCard(props: Product) {
    const { name, image } = props;
    const { toggleSave, isSaved } = useSaved();
    const { isAuthenticated } = useAuth();
    const saved = isSaved(name);

    return (
        <div className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-shadow group relative">
            {/* Save Button */}
            {isAuthenticated && (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleSave(props);
                    }}
                    className={`absolute top-4 right-4 z-20 p-2 rounded-full shadow-md transition-all duration-300 ${saved ? "bg-red-50 text-red-500" : "bg-white text-gray-400 hover:text-red-500"
                        }`}
                >
                    <Heart className={`w-5 h-5 ${saved ? "fill-current" : ""}`} />
                </button>
            )}

            {/* Image */}
            <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden p-4">
                <img src={image} alt={name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 transform translate-y-2 group-hover:translate-y-0 transition-transform">Quick View</button>
                </div>
            </div>

            <div className="space-y-2">
                <p className="text-primary font-bold">GSL001</p>
                <h3 className="font-medium text-gray-900 line-clamp-2 min-h-[3rem]">
                    {name}
                </h3>
            </div>
        </div>
    );
}
