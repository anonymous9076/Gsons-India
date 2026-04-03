"use client";

import { useState, useRef } from "react";
import { Plus, Trash2, Image as ImageIcon, Upload, X, Loader2, ExternalLink, Copy, Check } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getGalleryImages, uploadGalleryImage, deleteGalleryImage, GalleryItem } from "@/services/galleryApi";
import toast from "react-hot-toast";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import { cn } from "@/utils/cn";

export default function GalleryPage() {
    const queryClient = useQueryClient();
    const [isUploading, setIsUploading] = useState(false);
    const [previewImages, setPreviewImages] = useState<string[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Fetch Gallery Images
    const { data, isLoading } = useQuery({
        queryKey: ["gallery"],
        queryFn: getGalleryImages,
    });

    const images = data?.images || [];

    // Upload Mutation
    const uploadMutation = useMutation({
        mutationFn: uploadGalleryImage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["gallery"] });
            toast.success("Assets uploaded to gallery");
            handleCancelUpload();
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || "Upload failed");
            setIsUploading(false);
        }
    });

    // Delete Mutation
    const deleteMutation = useMutation({
        mutationFn: deleteGalleryImage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["gallery"] });
            toast.success("Image removed from gallery");
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || "Delete failed");
        }
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;

        if (files.length > 50) {
            toast.error("You can only upload up to 50 images at once.");
            return;
        }

        setSelectedFiles(files);
        const newPreviews: string[] = [];
        
        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                newPreviews.push(reader.result as string);
                if (newPreviews.length === files.length) {
                    setPreviewImages(newPreviews);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const handleUpload = () => {
        if (selectedFiles.length === 0) return;

        setIsUploading(true);
        const formData = new FormData();
        selectedFiles.forEach(file => {
            formData.append("images", file);
        });
        uploadMutation.mutate(formData);
    };

    const handleCancelUpload = () => {
        setSelectedFiles([]);
        setPreviewImages([]);
        setIsUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to remove this image from the gallery?")) {
            deleteMutation.mutate(id);
        }
    };

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        toast.success("URL copied to clipboard");
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="space-y-8 pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Image Gallery</h1>
                    <p className="text-gray-500 mt-2 font-medium">Manage global assets and product documentation images.</p>
                </div>
                
                <div className="flex items-center gap-4">
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                    />
                    {previewImages.length === 0 ? (
                        <Button
                            variant="primary"
                            onClick={() => fileInputRef.current?.click()}
                            leftIcon={<Plus className="w-5 h-5" />}
                            className="shadow-lg shadow-primary/20"
                        >
                            Upload Assets
                        </Button>
                    ) : (
                        <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-300">
                             <Button
                                variant="outline"
                                onClick={handleCancelUpload}
                                className="bg-white"
                                disabled={isUploading}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleUpload}
                                disabled={isUploading}
                                leftIcon={isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                            >
                                {isUploading ? "Uploading Batch..." : `Confirm ${selectedFiles.length} Uploads`}
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Upload Preview Widget */}
            {previewImages.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border-2 border-dashed border-primary/20 animate-in zoom-in-95 duration-300 shadow-xl shadow-primary/5">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <ImageIcon className="w-5 h-5 text-primary" />
                                Batch Preview ({selectedFiles.length} selected)
                            </h3>
                            <p className="text-xs text-gray-400 font-medium">Parallel processing enabled</p>
                        </div>
                        
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 max-h-[300px] overflow-y-auto p-1">
                            {previewImages.map((src, idx) => (
                                <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-transform hover:scale-105">
                                    <img src={src} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                                    {isUploading && (
                                        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                                            <Loader2 className="w-4 h-4 text-primary animate-spin" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-xl border border-orange-100 text-orange-700 text-[11px] font-medium leading-relaxed italic">
                            <Upload className="w-3.5 h-3.5 shrink-0" />
                            <span>Cloudinary optimization will be applied to all {selectedFiles.length} assets. High-resolution originals will be preserved in the architectural archive.</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Gallery Grid */}
            <div className="bg-white rounded-4xl border border-stone-100 shadow-sm p-8">
                {isLoading ? (
                    <div className="py-20">
                        <Loader text="Accessing Archive..." />
                    </div>
                ) : images.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {images.map((item: GalleryItem) => (
                            <div key={item._id} className="group relative bg-stone-50 rounded-2xl overflow-hidden border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                <div className="aspect-square relative flex items-center justify-center bg-white p-2">
                                    <img
                                        src={item.url}
                                        alt="Gallery"
                                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                    
                                    {/* Action Overlays */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3">
                                        <div className="flex items-center gap-2">
                                            <a 
                                                href={item.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                                                title="View Full Size"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                            <button 
                                                onClick={() => copyToClipboard(item.url, item._id)}
                                                className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                                                title="Copy URL"
                                            >
                                                {copiedId === item._id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(item._id)}
                                                className="w-10 h-10 rounded-full bg-white text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all transform hover:scale-110"
                                                title="Delete Asset"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border-t border-stone-100 bg-white">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono font-bold text-stone-400 truncate max-w-[100px]">
                                            {item.public_id.split('/').pop()}
                                        </span>
                                        <span className="text-[9px] font-bold text-stone-300 uppercase tracking-tighter">
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-32 text-center flex flex-col items-center justify-center space-y-6">
                        <div className="w-24 h-24 bg-stone-50 rounded-3xl flex items-center justify-center">
                            <ImageIcon className="w-10 h-10 text-stone-200" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-gray-900">Archive Currently Silent</h3>
                            <p className="text-gray-400 max-w-xs mx-auto">Upload your first architectural asset to begin building the global gallery.</p>
                        </div>
                        <Button
                            variant="primary"
                            onClick={() => fileInputRef.current?.click()}
                            leftIcon={<Upload className="w-4 h-4" />}
                        >
                            Select First Image
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
