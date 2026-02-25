"use client";

import Link from "next/link";
import { useCategories } from "@/hooks/useCategories";

export default function CategoryList() {
    const { categories, isLoading } = useCategories();

    if (isLoading) {
        return (
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="flex flex-col items-center animate-pulse">
                                <div className="w-24 h-24 rounded-full bg-gray-100 mb-3" />
                                <div className="h-4 bg-gray-100 rounded w-16" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (!categories.length) return null;

    return (
        <section className="py-12 bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat._id}
                            href={`/products?category=${cat._id}`}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className="w-24 h-24 rounded-full bg-orange-50 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg border-2 border-transparent group-hover:border-primary/20 overflow-hidden">
                                {cat.image?.url ? (
                                    <img
                                        src={cat.image.url}
                                        alt={cat.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-2xl font-bold text-primary">
                                        {cat.name.charAt(0).toUpperCase()}
                                    </span>
                                )}
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors text-center w-full block">
                                {cat.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
