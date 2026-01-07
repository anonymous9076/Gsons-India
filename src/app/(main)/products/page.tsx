"use client";
import React, { useState, useEffect } from 'react';
import * as productsData from '@/data/products';
import { Search, Filter, ChevronRight } from "lucide-react";

interface ProductItem {
    image: string;
    category: string;
    categoryName: string;
    id: string;
}

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>([]);

    const categories = [
        { id: 'All', name: 'All Products' },
        { id: 'bulb', name: 'LED Bulbs' },
        { id: 'concield', name: 'Concealed Lights' },
        { id: 'hanging', name: 'Hanging Lights' },
        { id: 'fancyWall', name: 'Fancy Wall Lights' },
        { id: 'gate', name: 'Gate Lights' },
        { id: 'strip', name: 'Strip Lights' },
        { id: 'adeptor', name: 'Strip Adeptors' },
        { id: 'wall', name: 'Wall Lights' },
        { id: 'jhummer', name: 'Jhummer' },
    ];

    useEffect(() => {
        let all: ProductItem[] = [];
        // Iterate over exported arrays in productsData
        Object.keys(productsData).forEach(key => {
            // @ts-ignore - Dynamic access to imported module
            const data = (productsData as any)[key];
            if (Array.isArray(data) && key !== 'allCategories') {
                const items = data.map((img: string, index: number) => ({
                    image: img,
                    category: key,
                    categoryName: categories.find(c => c.id === key)?.name || key,
                    id: `${key}_${index}`
                }));
                all = [...all, ...items];
            }
        });

        let filtered = all;

        if (activeCategory !== 'All') {
            filtered = all.filter(p => p.category === activeCategory);
        }

        if (searchQuery) {
            filtered = filtered.filter(p =>
                p.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [activeCategory, searchQuery]);

    return (
        <div className="bg-gray-50 min-h-screen pt-10 pb-24">

            <div className="container-custom grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
                {/* Sidebar Filter */}
                <aside className="relative lg:sticky lg:top-24 h-fit z-10">
                    <div className="relative mb-8">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full py-3 px-4 pl-10 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-orange-500/10 transition-all font-sans text-sm"
                        />
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-bold mb-5 flex items-center gap-2 text-gray-900">
                            <Filter className="text-primary w-4 h-4" /> Categories
                        </h3>
                        <ul className="flex overflow-x-auto lg:flex-col gap-2 pb-4 lg:pb-0 scrollbar-hide">
                            {categories.map((cat) => (
                                <li key={cat.id} className="shrink-0 min-w-[150px] lg:min-w-0">
                                    <button
                                        className={`w-full flex items-center justify-between p-3 lg:px-4 lg:py-3 rounded-xl text-sm font-medium transition-all ${activeCategory === cat.id ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 bg-white hover:bg-gray-100 hover:text-gray-900'}`}
                                        onClick={() => setActiveCategory(cat.id)}
                                    >
                                        <span>{cat.name}</span>
                                        <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${activeCategory === cat.id ? 'translate-x-1 opacity-100' : 'opacity-0'}`} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Product Grid */}
                <main>
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-sm text-gray-500">Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> products</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product, index) => (
                            <div key={index} className="group bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 relative flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.categoryName}
                                        loading="lazy"
                                        className="max-w-full max-h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay Action */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{product.categoryName}</span>
                                        <h3 className="font-medium text-gray-900 line-clamp-1">Code: {product.id}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="py-24 text-center bg-white rounded-3xl border border-dashed border-gray-300">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900">No products found</h3>
                            <p className="text-gray-500">Try adjusting your filters or search query.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
