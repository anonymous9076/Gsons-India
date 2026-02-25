"use client";

import { useState, useRef, useEffect } from "react";
import { X, Upload, Plus, Trash2, Send } from "lucide-react";
import Loader from "@/components/Loader";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { createProduct } from "@/services/productApi";
import { getAllCategories } from "@/services/categoryApi";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function NewProductPage() {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        categoryId: "",
        description: "",
        isActive: true,
    });

    // Fetch Categories from API
    const { data: catData, isLoading: catLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
    });

    const categories = catData?.categories || [];

    // Auto-generate slug from name
    useEffect(() => {
        if (!formData.slug || formData.slug === formData.name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")) {
            setFormData(prev => ({
                ...prev,
                slug: formData.name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
            }));
        }
    }, [formData.name]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setImages(prev => [...prev, ...selectedFiles]);
        }
    };

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.categoryId) {
            return toast.error("Please select a category");
        }

        if (images.length === 0) {
            return toast.error("Please upload at least one product image");
        }

        setLoading(true);

        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("slug", formData.slug);
            data.append("categoryId", formData.categoryId);
            data.append("description", formData.description);
            data.append("isActive", String(formData.isActive));

            images.forEach((image) => {
                data.append("files", image);
            });

            await createProduct(data);
            toast.success("Product created successfully!");
            router.push("/admin/products");
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || "Failed to create product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
                    <p className="text-gray-500 mt-2">Create a new base product entry. You can add variants later.</p>
                </div>
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X className="w-6 h-6 text-gray-500" />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-gray-900 placeholder:text-gray-500"
                                placeholder="Golden Wall Sconce"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Product Slug</label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-gray-900 placeholder:text-gray-500 font-mono text-sm"
                                placeholder="golden-wall-sconce"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Category</label>
                            <select
                                name="categoryId"
                                value={formData.categoryId}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-900 disabled:opacity-50"
                                required
                                disabled={catLoading}
                            >
                                <option value="">Select a category</option>
                                {categories.map((cat: any) => (
                                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                                ))}
                            </select>
                            {catLoading && <div className="text-xs text-gray-400 flex items-center gap-1"><Loader size="sm" text="" /> Loading categories...</div>}
                        </div>
                        <div className="flex items-end pb-4">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="isActive"
                                    name="isActive"
                                    checked={formData.isActive}
                                    onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                                    className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="isActive" className="text-sm font-bold text-gray-900 cursor-pointer">Active</label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-900">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-900 placeholder:text-gray-500"
                            placeholder="Detailed product information..."
                        />
                    </div>

                    <div className="pt-4">
                        <label className="text-sm font-bold text-gray-900 block mb-2">Base Product Images</label>
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center hover:border-primary transition-colors cursor-pointer group"
                        >
                            <input
                                type="file"
                                hidden
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                multiple
                                accept="image/*"
                            />
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-orange-100 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Upload className="w-8 h-8" />
                                </div>
                                <p className="font-bold text-gray-900">Click to upload base images</p>
                                <p className="text-sm text-gray-500 mt-1">PNG, JPG or WEBP up to 5MB</p>
                            </div>
                        </div>

                        {/* Image Preview */}
                        {images.length > 0 && (
                            <div className="mt-4 grid grid-cols-5 gap-4">
                                {images.map((img, i) => (
                                    <div key={i} className="relative aspect-square border rounded-xl overflow-hidden group">
                                        <img src={URL.createObjectURL(img)} alt="preview" className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); removeImage(i); }}
                                            className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-end gap-4 pb-12">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.back()}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        isLoading={loading}
                        leftIcon={<Plus className="w-5 h-5" />}
                        className="px-12"
                    >
                        Create Product
                    </Button>
                </div>
            </form>
        </div>
    );
}
