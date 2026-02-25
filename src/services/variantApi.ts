import API from "./api";

// Admin: Add Variant
export const addVariant = async (variantData: FormData) => {
    const { data } = await API.post("/admin/variant/new", variantData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

// Admin: Update Variant
export const updateVariant = async (id: string, variantData: FormData) => {
    const { data } = await API.post(`/admin/variant/${id}`, variantData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

// Admin: Delete Variant
export const deleteVariant = async (id: string) => {
    const { data } = await API.delete(`/admin/variant/${id}`);
    return data;
};

// Admin: Get Variant by ID
export const getVariantById = async (id: string) => {
    const { data } = await API.get(`/admin/variant/${id}`);
    return data.variant || data.data || data;
};

// Public: Get Variant by SKU
export const getVariantBySku = async (sku: string) => {
    const { data } = await API.get(`/variant/${sku}`);
    return data;
};
// Public: Get All Variants
export const getAllVariants = async (query = "") => {
    const { data } = await API.get(`/variants?${query}`);
    return data;
};
