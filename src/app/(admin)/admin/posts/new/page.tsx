"use client";

import { useState } from "react";
import { X, Upload, Send, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: "",
        excerpt: "",
        content: "",
        category: "Lighting Design",
        status: "Draft",
    });

    const categories = ["Lighting Design", "Home Decor", "Technical Guides", "Company News"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Post created successfully (Mock)!");
        router.push("/admin/posts");
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
                    <p className="text-gray-500 mt-2">Publish a new article or blog post.</p>
                </div>
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X className="w-6 h-6 text-gray-500" />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Post Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white text-lg font-semibold transition-all"
                                    placeholder="Enter a catchy title..."
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Excerpt</label>
                                <textarea
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleChange}
                                    rows={2}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-gray-600"
                                    placeholder="A short summary of the post..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Content</label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    rows={12}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-serif"
                                    placeholder="Start writing your masterpiece here..."
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Settings */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                            <h3 className="font-bold text-gray-900 border-b border-gray-50 pb-4">Publish Settings</h3>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                >
                                    <option value="Draft">Draft</option>
                                    <option value="Published">Published</option>
                                    <option value="Scheduled">Scheduled</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="pt-2 flex flex-col gap-3">
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Publish Now
                                </button>
                                <button
                                    type="button"
                                    className="w-full py-3 bg-gray-50 text-gray-600 font-bold rounded-xl border border-gray-100 hover:bg-white transition-all flex items-center justify-center gap-2"
                                >
                                    <Eye className="w-4 h-4" />
                                    Preview
                                </button>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                            <h3 className="font-bold text-gray-900">Featured Image</h3>
                            <div className="border-2 border-dashed border-gray-100 rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer group">
                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-primary transition-colors" />
                                <span className="text-xs font-bold text-gray-500 group-hover:text-primary">Click to upload</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
