import apiClient from "@/lib/apiClient";
import type { ProductsResponse, Product } from "@/types/product";

// ─── Public ──────────────────────────────────────────────
export const fetchProducts = async (query = ""): Promise<ProductsResponse> => {
    const { data } = await apiClient.get<ProductsResponse>(`/products?${query}`);
    return data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
    const { data } = await apiClient.get<any>(`/product/${id}`);
    return data.product || data.data || data;
};

export const fetchProductBySlug = async (slug: string): Promise<Product> => {
    const { data } = await apiClient.get<any>(`/product/slug/${slug}`);
    return data.product || data.data || data;
};

// ─── Admin ───────────────────────────────────────────────
export const createProduct = async (formData: FormData) => {
    const { data } = await apiClient.post("/admin/product/new", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

export const updateProduct = async (id: string, formData: FormData) => {
    const { data } = await apiClient.post(`/admin/product/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

export const deleteProduct = async (id: string) => {
    const { data } = await apiClient.delete(`/admin/product/${id}`);
    return data;
};
