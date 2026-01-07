"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, MoreVertical, Edit, Trash2 } from "lucide-react";
import { allCategories } from "@/data/products";

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    // Flatten products for listing
    const allProducts = Object.entries(allCategories).flatMap(([category, images]) =>
        images.map((img, index) => ({
            id: `${category}-${index}`,
            name: `${category.charAt(0).toUpperCase() + category.slice(1)} Lite #${index + 1}`,
            category: category,
            image: img,
            price: Math.floor(Math.random() * (5000 - 1000) + 1000),
            code: `GS-${category.slice(0, 3).toUpperCase()}-${index + 100}`
        }))
    );

    const filteredProducts = allProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Products</h1>
                    <p className="text-gray-500 mt-2">Manage your lighting collection.</p>
                </div>
                <Link
                    href="/admin/products/new"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all transform hover:-translate-y-0.5"
                >
                    <Plus className="w-5 h-5" />
                    <span>Add Product</span>
                </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>All Categories</option>
                        {Object.keys(allCategories).map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600 text-sm font-semibold uppercase tracking-wider">
                                <th className="px-6 py-4">Product</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Code</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredProducts.slice(0, 10).map((product) => (
                                <tr key={product.id} className="hover:bg-orange-50/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                            </div>
                                            <span className="font-semibold text-gray-900">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full capitalize">
                                            {product.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                                        {product.code}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-900">
                                        ₹{product.price}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-sm text-gray-500">
                    <span>Showing 10 of {filteredProducts.length} products</span>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-white disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-white">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
