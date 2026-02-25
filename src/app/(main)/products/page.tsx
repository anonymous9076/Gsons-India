"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Filter, ChevronRight, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";
import type { ProductFilters } from "@/types/product";

const LIMIT = 12;

const SORT_OPTIONS = [
    { label: "Newest First", value: "-createdAt" },
    { label: "Price: Low to High", value: "price" },
    { label: "Price: High to Low", value: "-price" },
    { label: "Name: A–Z", value: "name" },
];

// ─── Filter Sidebar ───────────────────────────────────────
function FilterSidebar({
    search, setSearch,
    activeCategoryId, onCategoryClick,
    maxPrice, setMaxPrice,
    hasActiveFilters, onClear,
    open, onClose,
}: {
    search: string;
    setSearch: (v: string) => void;
    activeCategoryId: string;
    onCategoryClick: (id: string) => void;
    maxPrice: number;
    setMaxPrice: (v: number) => void;
    hasActiveFilters: boolean;
    onClear: () => void;
    open: boolean;
    onClose: () => void;
}) {
    const { categories } = useCategories();

    return (
        <>
            {/* Mobile overlay */}
            {open && (
                <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onClose} />
            )}

            <aside className={`
                fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl p-6 overflow-y-auto transition-transform duration-300
                lg:static lg:h-auto lg:w-auto lg:shadow-none lg:p-0 lg:translate-x-0 lg:z-auto lg:overflow-visible lg:bg-transparent
                ${open ? "translate-x-0" : "-translate-x-full"}
            `}>
                {/* Mobile header */}
                <div className="flex items-center justify-between mb-6 lg:hidden">
                    <h2 className="text-lg font-black text-gray-900">Filters</h2>
                    <button onClick={onClose} aria-label="Close filters">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="space-y-6 lg:sticky lg:top-24">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full py-3 pl-10 pr-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-orange-500/10 transition-all text-sm"
                        />
                    </div>

                    {/* Categories */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                        <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Filter className="w-3.5 h-3.5 text-primary" /> Categories
                        </h3>
                        <ul className="space-y-1">
                            {[{ _id: "", name: "All Products" }, ...categories].map((cat) => (
                                <li key={cat._id}>
                                    <button
                                        onClick={() => onCategoryClick(cat._id)}
                                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeCategoryId === cat._id
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                    >
                                        <span>{cat.name}</span>
                                        {activeCategoryId === cat._id && <ChevronRight className="w-3.5 h-3.5" />}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Range */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                        <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">
                            Price Range
                        </h3>
                        <input
                            type="range"
                            min={0} max={50000} step={500}
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="w-full accent-primary cursor-pointer"
                        />
                        <div className="flex justify-between text-sm font-bold text-gray-700 mt-2">
                            <span>₹0</span>
                            <span className="text-primary">Up to ₹{maxPrice.toLocaleString("en-IN")}</span>
                        </div>
                    </div>

                    {/* Clear */}
                    {hasActiveFilters && (
                        <button
                            onClick={onClear}
                            className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-dashed border-gray-300 rounded-xl text-sm font-bold text-gray-500 hover:border-primary hover:text-primary transition-all"
                        >
                            <X className="w-4 h-4" /> Clear All Filters
                        </button>
                    )}
                </div>
            </aside>
        </>
    );
}

// ─── Skeleton Grid ────────────────────────────────────────
function SkeletonGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(LIMIT)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 h-80 animate-pulse border border-gray-100">
                    <div className="bg-gray-100 h-48 rounded-xl mb-4" />
                    <div className="bg-gray-100 h-4 w-3/4 rounded mb-2" />
                    <div className="bg-gray-100 h-4 w-1/3 rounded" />
                </div>
            ))}
        </div>
    );
}

// ─── Pagination ───────────────────────────────────────────
function Pagination({ page, totalPages, onChange }: { page: number; totalPages: number; onChange: (p: number) => void }) {
    if (totalPages <= 1) return null;
    return (
        <div className="flex justify-center items-center gap-2 mt-12">
            <button onClick={() => onChange(page - 1)} disabled={page === 1}
                className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm font-bold text-gray-700 disabled:opacity-40 hover:bg-gray-50 transition-all">
                ← Prev
            </button>
            {[...Array(totalPages)].map((_, i) => {
                const p = i + 1;
                if (p === 1 || p === totalPages || Math.abs(p - page) <= 1) {
                    return (
                        <button key={p} onClick={() => onChange(p)}
                            className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${page === p ? "bg-gray-900 text-white" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                                }`}>
                            {p}
                        </button>
                    );
                }
                if (Math.abs(p - page) === 2) return <span key={p} className="text-gray-400">…</span>;
                return null;
            })}
            <button onClick={() => onChange(page + 1)} disabled={page === totalPages}
                className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm font-bold text-gray-700 disabled:opacity-40 hover:bg-gray-50 transition-all">
                Next →
            </button>
        </div>
    );
}

// ─── Main Page Content ────────────────────────────────────
function ProductsContent() {
    const searchParams = useSearchParams();

    // Filter state
    const [search, setSearch] = useState(searchParams.get("keyword") || "");
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    const [activeCategoryId, setActiveCategoryId] = useState(searchParams.get("category") || "");
    const [sort, setSort] = useState("-createdAt");
    const [maxPrice, setMaxPrice] = useState(50000);
    const [page, setPage] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Category data for the header label
    const { categories } = useCategories();
    const activeCategoryName = categories.find((c) => c._id === activeCategoryId)?.name;

    // Sync category from URL (e.g. clicking landing page category circle)
    useEffect(() => {
        const cat = searchParams.get("category");
        setActiveCategoryId(cat || "");
    }, [searchParams]);

    // Debounce search — reset to page 1 when keyword changes
    useEffect(() => {
        const timer = setTimeout(() => { setDebouncedSearch(search); setPage(1); }, 400);
        return () => clearTimeout(timer);
    }, [search]);

    const filters: ProductFilters = {
        keyword: debouncedSearch || undefined,
        category: activeCategoryId || undefined,
        maxPrice,
        sort,
        page,
        limit: LIMIT,
    };

    const { data, isLoading } = useProducts(filters);
    const products = data?.data ?? [];
    const totalProducts = data?.total ?? 0;
    const totalPages = Math.ceil(totalProducts / LIMIT);

    const hasActiveFilters = !!(search || activeCategoryId || sort !== "-createdAt" || maxPrice < 50000);

    const handleCategoryClick = (id: string) => { setActiveCategoryId(id); setPage(1); setSidebarOpen(false); };
    const handleClear = () => { setSearch(""); setActiveCategoryId(""); setSort("-createdAt"); setMaxPrice(50000); setPage(1); };

    return (
        <div className="bg-gray-50 min-h-screen pt-8 pb-24">
            <div className="container-custom">
                {/* Page Header */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900">
                            {activeCategoryName || "All Products"}
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">
                            {isLoading ? "Loading..." : `${totalProducts} product${totalProducts !== 1 ? "s" : ""} found`}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Sort */}
                        <div className="relative">
                            <select
                                value={sort}
                                onChange={(e) => { setSort(e.target.value); setPage(1); }}
                                className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shadow-sm"
                            >
                                {SORT_OPTIONS.map((o) => (
                                    <option key={o.value} value={o.value}>{o.label}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                        </div>

                        {/* Mobile filter toggle */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 shadow-sm"
                        >
                            <SlidersHorizontal className="w-4 h-4" /> Filters
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
                    <FilterSidebar
                        search={search} setSearch={setSearch}
                        activeCategoryId={activeCategoryId} onCategoryClick={handleCategoryClick}
                        maxPrice={maxPrice} setMaxPrice={(v) => { setMaxPrice(v); setPage(1); }}
                        hasActiveFilters={hasActiveFilters} onClear={handleClear}
                        open={sidebarOpen} onClose={() => setSidebarOpen(false)}
                    />

                    <main>
                        {isLoading ? (
                            <SkeletonGrid />
                        ) : products.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {products.flatMap((product) => {
                                        // If product has variants, create a card for each active variant
                                        if (product.variants && product.variants.length > 0) {
                                            return product.variants
                                                .filter((v) => v.isActive !== false)
                                                .map((variant) => ({
                                                    ...product,
                                                    _id: variant._id, // Use variant ID for routing/key
                                                    productId: product._id, // Keep reference to parent
                                                    name: `${product.name} - ${Object.values(variant.attributes).join(' / ')}`,
                                                    price: variant.price,
                                                    images: variant.images && variant.images.length > 0 ? variant.images : product.images,
                                                    sku: variant.sku
                                                }));
                                        }
                                        // Fallback to the base product if no variants
                                        return [product];
                                    }).map((displayItem) => (
                                        <ProductCard key={displayItem._id} {...displayItem} />
                                    ))}
                                </div>
                                <Pagination page={page} totalPages={totalPages} onChange={setPage} />
                            </>
                        ) : (
                            <div className="py-32 text-center bg-white rounded-3xl border border-dashed border-gray-200">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-2xl font-black text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-500 mb-6">Try adjusting your filters or search query.</p>
                                <button onClick={handleClear}
                                    className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-orange-600 transition-all">
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

// Suspense wrapper required for useSearchParams
export default function ProductsPage() {
    return (
        <Suspense>
            <ProductsContent />
        </Suspense>
    );
}
