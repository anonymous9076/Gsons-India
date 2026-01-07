"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit2, Trash2, Calendar, User, Eye } from "lucide-react";

export default function PostsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [posts, setPosts] = useState([
        { id: 1, title: "How to choose the perfect lighting for your living room", author: "Admin", date: "June 12, 2024", status: "Published", comments: 24 },
        { id: 2, title: "The benefits of LED lighting for your home and office", author: "Tushar Gupta", date: "June 10, 2024", status: "Published", comments: 18 },
        { id: 3, title: "Modern design trends in decorative lighting for 2024", author: "Admin", date: "June 05, 2024", status: "Draft", comments: 0 },
    ]);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Posts Management</h1>
                    <p className="text-gray-500 mt-2">Create and manage blog posts and articles.</p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all transform hover:-translate-y-0.5"
                >
                    <Plus className="w-5 h-5" />
                    <span>New Post</span>
                </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search posts..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600 text-sm font-semibold uppercase tracking-wider">
                                <th className="px-6 py-4">Post Title</th>
                                <th className="px-6 py-4">Details</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredPosts.map((post) => (
                                <tr key={post.id} className="hover:bg-orange-50/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="max-w-md">
                                            <div className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors cursor-pointer">{post.title}</div>
                                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-600">
                                            <span className="font-medium text-gray-900">{post.comments}</span> Comments
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${post.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {post.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 text-gray-400">
                                            <button className="p-2 hover:text-blue-600 transition-colors"><Eye className="w-5 h-5" /></button>
                                            <button className="p-2 hover:text-orange-500 transition-colors"><Edit2 className="w-4 h-4" /></button>
                                            <button className="p-2 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
