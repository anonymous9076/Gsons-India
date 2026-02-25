import apiClient from "@/lib/apiClient";
import type { CategoriesResponse, Category } from "@/types/category";

// ─── Public ──────────────────────────────────────────────
export const fetchCategories = async (): Promise<CategoriesResponse> => {
    const { data } = await apiClient.get<CategoriesResponse>("/categories");
    return data;
};

// ─── Admin ───────────────────────────────────────────────
export const createCategory = async (formData: FormData): Promise<Category> => {
    const { data } = await apiClient.post<Category>("/admin/category", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

export const updateCategory = async (id: string, formData: FormData): Promise<Category> => {
    const { data } = await apiClient.put<Category>(`/admin/category/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

export const deleteCategory = async (id: string) => {
    const { data } = await apiClient.delete(`/admin/category/${id}`);
    return data;
};
