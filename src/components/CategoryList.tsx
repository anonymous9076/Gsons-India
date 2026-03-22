"use client";

import Link from "next/link";
import { useCategories } from "@/hooks/useCategories";
import { cn } from "@/utils/cn";

export default function CategoryList() {
    const { categories, isLoading } = useCategories();

    if (isLoading) {
        return (
            <section className="py-16 bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="flex items-center justify-between gap-8 overflow-x-auto pb-8 scrollbar-hide">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="flex flex-col items-center shrink-0 animate-pulse">
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-slate-50 border border-slate-100 mb-4" />
                                <div className="h-3 bg-slate-50 rounded w-12" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (!categories.length) return null;

    // Duplicate categories for infinite scroll
    const duplicatedCategories = [...categories, ...categories, ...categories, ...categories];

    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl  text-slate-900 tracking-tight font-display">
                        Choose Your Category
                    </h2>
                    <p className="text-slate-400 text-[13px] font-medium italic">Explore our curated collection of professional lighting solutions</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat._id}
                            href={`/products?category=${cat._id}`}
                            className="group relative flex flex-col items-center p-8 rounded-[2rem] border border-slate-50 transition-all duration-500 hover:bg-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2"
                        >
                            {/* Icon / Mini-image */}
                            <div className="w-16 h-16 mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                {cat.image?.url ? (
                                    <img
                                        src={cat.image.url}
                                        alt={cat.name}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-300  group-hover:border-white/40 group-hover:text-white">
                                        {cat.name.charAt(0)}
                                    </div>
                                )}
                            </div>

                            <div className="text-center space-y-1">
                                <h3 className="text-sm  text-slate-800  tracking-widest group-hover:text-white transition-colors">
                                    {cat.name}
                                </h3>
                                <p className="text-[10px] font-bold text-slate-400  tracking-tighter group-hover:text-white/70 transition-colors">
                                    25+ Items Collection
                                </p>
                            </div>

                            {/* Decorative element seen in some Grostore categories */}
                            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-white/40" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
