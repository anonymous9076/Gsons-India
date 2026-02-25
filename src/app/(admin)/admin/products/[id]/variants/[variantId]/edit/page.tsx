"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, X, Upload, Trash2, Save, ArrowLeft } from "lucide-react";
import Loader from "@/components/Loader";
import { useRouter, useParams } from "next/navigation";
import { updateVariant, getVariantById } from "@/services/variantApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Button from "@/components/Button";

export default function EditVariantPage() {
    const router = useRouter();
    const { id: productId, variantId } = useParams();
    const queryClient = useQueryClient();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<File[]>([]);
    const [existingImages, setExistingImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        sku: "",
        price: "",
        stock: "",
        isActive: true,
    });

    const [attributes, setAttributes] = useState<{ key: string; value: string }[]>([
        { key: "", value: "" }
    ]);

    // Fetch Variant Data
    const { data: variantData, isLoading: variantLoading } = useQuery({
        queryKey: ["variant", variantId],
        queryFn: () => getVariantById(variantId as string),
        enabled: !!variantId
    });

    useEffect(() => {
        if (variantData) {
            const v = variantData;
            setFormData({
                sku: v.sku || "",
                price: String(v.price || ""),
                stock: String(v.stock || ""),
                isActive: v.isActive,
            });
            setExistingImages(v.images || []);

            if (v.attributes) {
                const attrs = Object.entries(v.attributes).map(([key, value]) => ({
                    key,
                    value: String(value)
                }));
                setAttributes(attrs.length > 0 ? attrs : [{ key: "", value: "" }]);
            }
        }
    }, [variantData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    const handleAttributeChange = (index: number, field: 'key' | 'value', value: string) => {
        const newAttributes = [...attributes];
        newAttributes[index][field] = value;
        setAttributes(newAttributes);
    };

    const addAttribute = () => setAttributes([...attributes, { key: "", value: "" }]);
    const removeAttribute = (index: number) => setAttributes(attributes.filter((_, i) => i !== index));

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setImages(prev => [...prev, ...selectedFiles]);
        }
    };

    const removeNewImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const data = new FormData();
            data.append("sku", formData.sku);
            data.append("price", formData.price);
            data.append("stock", formData.stock);
            data.append("isActive", String(formData.isActive));

            const attrObj: Record<string, string> = {};
            attributes.forEach(attr => {
                if (attr.key.trim() && attr.value.trim()) {
                    attrObj[attr.key.trim()] = attr.value.trim();
                }
            });
            data.append("attributes", JSON.stringify(attrObj));

            if (images.length > 0) {
                images.forEach((image) => {
                    data.append("files", image);
                });
            }

            await updateVariant(variantId as string, data);
            queryClient.invalidateQueries({ queryKey: ["variant", variantId] });
            queryClient.invalidateQueries({ queryKey: ["product-variants", productId] });

            toast.success("Variant updated successfully!");
            router.push(`/admin/products/${productId}/variants`);
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || "Failed to update variant");
        } finally {
            setLoading(false);
        }
    };

    if (variantLoading) return <Loader fullPage text="Fetching variant details..." />;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        onClick={() => router.back()}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6 text-gray-500" />
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Edit Variant</h1>
                        <p className="text-gray-500 mt-1">Updating SKU: <span className="font-bold text-primary">{formData.sku}</span></p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">SKU (Unique Code)</label>
                            <input
                                type="text"
                                name="sku"
                                value={formData.sku}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-gray-900 placeholder:text-gray-500 font-mono"
                                placeholder="GS-WAL-101-GOLD"
                                required
                            />
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

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Price (₹)</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-900 placeholder:text-gray-500"
                                placeholder="2999"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Stock Status</label>
                            <input
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-900 placeholder:text-gray-500"
                                placeholder="100"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-bold text-gray-900">Attributes (Color, Material, etc.)</label>
                            <Button
                                variant="ghost"
                                type="button"
                                size="sm"
                                onClick={addAttribute}
                                className="text-primary"
                                leftIcon={<Plus className="w-4 h-4" />}
                            >
                                Add Attribute
                            </Button>
                        </div>
                        <div className="space-y-3">
                            {attributes.map((attr, index) => (
                                <div key={index} className="flex gap-3 items-center">
                                    <input
                                        type="text"
                                        placeholder="Key (e.g. Color)"
                                        value={attr.key}
                                        onChange={(e) => handleAttributeChange(index, 'key', e.target.value)}
                                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm text-gray-900"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Value (e.g. Gold)"
                                        value={attr.value}
                                        onChange={(e) => handleAttributeChange(index, 'value', e.target.value)}
                                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm text-gray-900"
                                    />
                                    <Button
                                        variant="outline"
                                        type="button"
                                        size="sm"
                                        onClick={() => removeAttribute(index)}
                                        className="text-gray-400 hover:text-red-500"
                                        leftIcon={<Trash2 className="w-4 h-4" />}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4">
                        <label className="text-sm font-bold text-gray-900 block mb-2">Variant Images</label>

                        {existingImages.length > 0 && images.length === 0 && (
                            <div className="mb-4">
                                <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Current Images</p>
                                <div className="grid grid-cols-5 gap-4">
                                    {existingImages.map((img, i) => (
                                        <div key={i} className="aspect-square border rounded-xl overflow-hidden bg-gray-50">
                                            <img src={img.url} alt="existing" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-orange-500 mt-2 font-bold">Note: Uploading new images will replace all current images.</p>
                            </div>
                        )}

                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-gray-200 rounded-3xl p-8 text-center hover:border-primary transition-colors cursor-pointer group"
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
                                <div className="w-12 h-12 bg-orange-100 text-primary rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Upload className="w-6 h-6" />
                                </div>
                                <p className="font-bold text-gray-900 text-sm">Upload new images to replace current ones</p>
                                <p className="text-xs text-gray-500 mt-1">PNG, JPG or WEBP up to 5MB</p>
                            </div>
                        </div>

                        {images.length > 0 && (
                            <div className="mt-4">
                                <p className="text-xs mb-2 font-medium uppercase tracking-wider text-primary">New Selection</p>
                                <div className="grid grid-cols-5 gap-4">
                                    {images.map((img, i) => (
                                        <div key={i} className="relative aspect-square border rounded-xl overflow-hidden group">
                                            <img src={URL.createObjectURL(img)} alt="preview" className="w-full h-full object-cover" />
                                            <button
                                                type="button"
                                                onClick={(e) => { e.stopPropagation(); removeNewImage(i); }}
                                                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-end gap-4 pb-12">
                    <Button
                        variant="outline"
                        type="button"
                        onClick={() => router.back()}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        type="submit"
                        isLoading={loading}
                        leftIcon={<Save className="w-5 h-5" />}
                        className="px-12"
                    >
                        Save Changes
                    </Button>
                </div>
            </form>
        </div>
    );
}
