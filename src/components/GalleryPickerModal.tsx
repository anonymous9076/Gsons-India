"use client";

import { useState } from "react";
import { X, Search, Check, Image as ImageIcon, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getGalleryImages, GalleryItem } from "@/services/galleryApi";
import Button from "./Button";
import { cn } from "@/utils/cn";

interface GalleryPickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (selectedImages: GalleryItem[]) => void;
}

export default function GalleryPickerModal({ isOpen, onClose, onSelect }: GalleryPickerModalProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const { data, isLoading } = useQuery({
        queryKey: ["gallery"],
        queryFn: getGalleryImages,
        enabled: isOpen,
    });

    const images = data?.images || [];
    
    const filteredImages = images.filter(img => 
        img.public_id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleSelect = (id: string) => {
        setSelectedIds(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleConfirm = () => {
        const selectedImages = images.filter(img => selectedIds.includes(img._id));
        onSelect(selectedImages);
        setSelectedIds([]);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-5xl h-[85vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 leading-tight">Select from Gallery</h2>
                        <p className="text-sm text-gray-500 mt-1">Choose existing architectural assets to attach.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2.5 hover:bg-gray-100 rounded-full transition-all hover:rotate-90 duration-300"
                    >
                        <X className="w-6 h-6 text-gray-400" />
                    </button>
                </div>

                {/* Search Bar */}
                <div className="px-8 py-4 bg-gray-50/50 border-b border-gray-100">
                    <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by asset name or ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm shadow-sm"
                        />
                    </div>
                </div>

                {/* Image Grid */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    {isLoading ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                            <Loader2 className="w-10 h-10 animate-spin text-primary" />
                            <p className="text-sm font-medium tracking-wide">Syncing with Archive...</p>
                        </div>
                    ) : filteredImages.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {filteredImages.map((image) => {
                                const isSelected = selectedIds.includes(image._id);
                                return (
                                    <div
                                        key={image._id}
                                        onClick={() => toggleSelect(image._id)}
                                        className={cn(
                                            "relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group border-2",
                                            isSelected 
                                                ? "border-primary ring-4 ring-primary/10 shadow-lg" 
                                                : "border-transparent hover:border-gray-200"
                                        )}
                                    >
                                        <img
                                            src={image.url}
                                            alt="Gallery"
                                            className={cn(
                                                "w-full h-full object-cover transition-transform duration-500",
                                                isSelected ? "scale-105" : "group-hover:scale-110"
                                            )}
                                        />
                                        
                                        {/* Selection Indicator */}
                                        <div className={cn(
                                            "absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
                                            isSelected 
                                                ? "bg-primary text-white scale-100 shadow-md" 
                                                : "bg-white/80 text-gray-400 opacity-0 group-hover:opacity-100 scale-90"
                                        )}>
                                            <Check className="w-4 h-4 stroke-[3]" />
                                        </div>

                                        {/* Overlay on hover/select */}
                                        <div className={cn(
                                            "absolute inset-0 transition-all duration-300 pointer-events-none",
                                            isSelected ? "bg-primary/5" : "group-hover:bg-black/5"
                                        )} />
                                        
                                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                                            <p className="text-[10px] text-white font-mono truncate">{image.public_id.split('/').pop()}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                            <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-2">
                                <ImageIcon className="w-10 h-10 text-gray-200" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">No assets found</h3>
                            <p className="text-sm max-w-xs text-center">Try a different search term or upload new images to the gallery first.</p>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="px-8 py-6 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between sticky bottom-0 z-10">
                    <p className="text-sm font-bold text-gray-500 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                        {selectedIds.length} assets selected
                    </p>
                    <div className="flex items-center gap-3">
                        <Button 
                            variant="outline" 
                            onClick={onClose}
                            className="bg-white border-gray-200"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleConfirm}
                            disabled={selectedIds.length === 0}
                            className="px-8 shadow-lg shadow-primary/20"
                        >
                            Attach {selectedIds.length > 0 ? `(${selectedIds.length})` : ""}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
