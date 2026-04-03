import apiClient from "@/lib/apiClient";

export interface GalleryItem {
    _id: string;
    url: string;
    public_id: string;
    createdAt: string;
}

export interface GalleryResponse {
    success: boolean;
    images: GalleryItem[];
}

export const getGalleryImages = async (): Promise<GalleryResponse> => {
    const { data } = await apiClient.get<GalleryResponse>("/gallery");
    return data;
};

export const uploadGalleryImage = async (formData: FormData) => {
    const { data } = await apiClient.post("/gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

export const deleteGalleryImage = async (id: string) => {
    const { data } = await apiClient.delete(`/gallery/${id}`);
    return data;
};
