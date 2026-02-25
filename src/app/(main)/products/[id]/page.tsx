"use client";

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/services/productApi';
import { ArrowLeft, Heart, ShoppingCart, Check, Info } from "lucide-react";
import { useState, useEffect, useMemo } from 'react';
import { formatPrice } from '@/utils/formatters';
import { cn } from '@/utils/cn';
import Button from '@/components/Button';
import type { Product, Variant } from '@/types/product';

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const productId = params?.id as string;

    const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
    const [mainImage, setMainImage] = useState<string>('');
    const [selectedAttributes, setSelectedAttributes] = useState<Record<string, string>>({});

    const { data: product, isLoading, error } = useQuery<Product>({
        queryKey: ['product', productId],
        queryFn: () => getProductById(productId),
        enabled: !!productId
    });

    // Group variants by attributes for selector UI
    const attributeOptions = useMemo(() => {
        if (!product?.variants) return {};
        const options: Record<string, Set<string>> = {};
        product.variants.forEach(v => {
            Object.entries(v.attributes).forEach(([key, value]) => {
                if (!options[key]) options[key] = new Set();
                options[key].add(String(value));
            });
        });
        return Object.fromEntries(
            Object.entries(options).map(([k, v]) => [k, Array.from(v)])
        );
    }, [product]);

    // Initial state setup
    useEffect(() => {
        if (product) {
            // Default to first image
            setMainImage(product.images?.[0]?.url || '/placeholder.png');

            // If it's a direct variant ID, pre-select it
            const matchedVariant = product.variants?.find(v => v._id === productId);
            if (matchedVariant) {
                setSelectedVariant(matchedVariant);
                setSelectedAttributes(matchedVariant.attributes);
                if (matchedVariant.images?.[0]) setMainImage(matchedVariant.images[0].url);
            } else if (product.variants?.length) {
                // Otherwise pre-select first variant
                const firstVariant = product.variants[0];
                setSelectedVariant(firstVariant);
                setSelectedAttributes(firstVariant.attributes);
            }
        }
    }, [product, productId]);

    // Update selected variant when attributes change
    const handleAttributeSelect = (key: string, value: string) => {
        const newAttrs = { ...selectedAttributes, [key]: value };
        setSelectedAttributes(newAttrs);

        const found = product?.variants?.find(v =>
            Object.entries(newAttrs).every(([k, val]) => String(v.attributes[k]) === val)
        );

        if (found) {
            setSelectedVariant(found);
            if (found.images?.[0]) setMainImage(found.images[0].url);
        }
    };

    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-gray-100 border-t-primary rounded-full animate-spin"></div>
                <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Loading Gsons Collection</p>
            </div>
        </div>
    );

    if (error || !product) return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-gray-50 p-6 text-center">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl mb-4 text-4xl">🔎</div>
            <div>
                <h1 className="text-3xl font-black text-gray-900 mb-2">Item Not Found</h1>
                <p className="text-gray-500 max-w-xs mx-auto">We couldn't find the specific product you're looking for. It might be out of stock or moved.</p>
            </div>
            <Button variant="primary" onClick={() => router.push('/products')} leftIcon={<ArrowLeft className="w-5 h-5" />}>
                Browse All Products
            </Button>
        </div>
    );

    const currentPrice = selectedVariant?.price ?? product.price;
    const currentSKU = selectedVariant?.sku ?? product.code;
    const currentImages = (selectedVariant?.images?.length ? selectedVariant.images : product.images) || [];

    return (
        <div className="bg-white min-h-screen pb-24">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4 mb-8">
                <div className="container-custom flex items-center justify-between">
                    <button onClick={() => router.back()} className="flex items-center text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
                    </button>
                    <div className="hidden md:block">
                        <h2 className="text-sm font-bold text-gray-400 truncate max-w-[300px]">{product.name}</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-lg font-black text-gray-900">{formatPrice(currentPrice)}</span>
                        <Button size="sm" variant="primary" className="hidden sm:flex">Add to Cart</Button>
                    </div>
                </div>
            </div>

            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Enhanced Image Gallery */}
                    <div className="space-y-6">
                        <div className="group relative aspect-square bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 flex items-center justify-center p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 active:scale-95">
                            <img
                                src={mainImage}
                                alt={product.name}
                                className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                            />
                            {product.isSale && (
                                <div className="absolute top-8 left-8 bg-primary text-white font-black px-5 py-2 rounded-2xl shadow-xl shadow-orange-500/30 text-xs tracking-widest rotate-[-5deg]">
                                    SALE
                                </div>
                            )}
                        </div>

                        {/* Custom Thumbnails */}
                        {currentImages.length > 1 && (
                            <div className="flex flex-wrap gap-4">
                                {currentImages.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setMainImage(img.url)}
                                        className={cn(
                                            "w-20 h-20 p-2 rounded-2xl bg-gray-50 border-2 transition-all duration-300 transform active:scale-90",
                                            mainImage === img.url
                                                ? "border-primary shadow-lg shadow-orange-500/20 bg-white scale-110"
                                                : "border-gray-100 hover:border-gray-300 opacity-60 hover:opacity-100"
                                        )}
                                    >
                                        <img src={img.url} alt="" className="w-full h-full object-contain" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Product Interaction Content */}
                    <div className="flex flex-col">
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center px-4 py-1.5 bg-orange-50 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-100">
                                    {typeof product.category === 'object' ? product.category.name : product.category}
                                </span>
                                {currentSKU && (
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                        SKU: {currentSKU}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                                {product.name}
                            </h1>
                            <div className="flex items-baseline gap-4">
                                <span className="text-4xl font-black text-gray-900">{formatPrice(currentPrice)}</span>
                                {product.originalPrice && (
                                    <span className="text-xl text-gray-300 line-through font-bold">
                                        {formatPrice(product.originalPrice)}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Variant Selectors */}
                        {Object.entries(attributeOptions).length > 0 && (
                            <div className="space-y-8 mb-10">
                                {Object.entries(attributeOptions).map(([key, values]) => (
                                    <div key={key}>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">{key}</span>
                                            <span className="text-[11px] font-bold text-gray-900">{selectedAttributes[key]}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {values.map(val => (
                                                <button
                                                    key={val}
                                                    onClick={() => handleAttributeSelect(key, val)}
                                                    className={cn(
                                                        "px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300",
                                                        selectedAttributes[key] === val
                                                            ? "bg-gray-900 text-white shadow-xl shadow-gray-900/20 scale-105"
                                                            : "bg-gray-50 text-gray-600 border border-gray-100 hover:bg-white hover:border-gray-300"
                                                    )}
                                                >
                                                    {val}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Description & Specs Tab Style */}
                        <div className="bg-gray-50 rounded-3xl p-8 mb-10 border border-gray-100">
                            <h3 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4">
                                <Info className="w-3.5 h-3.5 text-primary" /> Product Insights
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                                {product.description || "The Gsons collection represents a harmonious blend of sustainable craftsmanship and contemporary lighting design."}
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Material</span>
                                    <span className="text-sm font-bold text-gray-900">{product.material || "Brass & Glass"}</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Type</span>
                                    <span className="text-sm font-bold text-gray-900">{product.type || "Interior/Wall"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <button className="flex-[2] bg-primary text-white py-5 rounded-[20px] font-black uppercase tracking-[0.1em] text-sm shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
                                <ShoppingCart className="w-5 h-5" /> Add to Collection
                            </button>
                            <button className="flex-1 bg-white border border-gray-200 text-gray-900 py-5 rounded-[20px] font-black uppercase tracking-[0.1em] text-sm transition-all duration-300 hover:border-red-500 hover:text-red-500 active:scale-95 flex items-center justify-center gap-2 group">
                                <Heart className="w-5 h-5 group-hover:fill-current" /> Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
