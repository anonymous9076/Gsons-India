"use client";

import React from 'react';
import Link from 'next/link';
import { useCategories } from "@/hooks/useCategories";

const Header = () => {
    const { categories, isLoading } = useCategories();

    if (isLoading) {
        return (
            <div className='bg-white border-b border-slate-100 h-12 w-full flex items-center justify-center'>
                <div className="flex gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-3 w-20 bg-slate-100 animate-pulse rounded" />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='bg-white border-b border-slate-100 w-full overflow-hidden'>
            <div className="container-custom">
                <nav className="flex items-center justify-center gap-2 md:gap-8 h-12">
                    {categories.map((category) => (
                        <Link
                            key={category._id}
                            href={`/products?category=${category._id}`}
                            className="text-[9px] md:text-[10px] font-medium   text-slate-500 hover:text-primary transition-all duration-300 whitespace-nowrap"
                        >
                            {category.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Header;