import apiClient from "@/lib/apiClient";

export interface GalleryFolder {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface GalleryItem {
    _id: string;
    url: string;
    public_id: string;
    folder: string;
    createdAt: string;
}

export interface GalleryResponse {
    success: boolean;
    images: GalleryItem[];
}

export interface FolderResponse {
    success: boolean;
    folders: GalleryFolder[];
}

// Folder APIs
export const getFolders = async (): Promise<FolderResponse> => {
    const { data } = await apiClient.get<FolderResponse>("/gallery/folders");
    return data;
};

export const createFolder = async (name: string) => {
    const { data } = await apiClient.post("/gallery/folders", { name });
    return data;
};

export const deleteFolder = async (id: string) => {
    const { data } = await apiClient.delete(`/gallery/folders/${id}`);
    return data;
};

export const exportGallery = async () => {
    const response = await apiClient.get("/gallery/folders/export", {
        responseType: 'blob'
    });
    return response.data;
};

// Image APIs
export const getGalleryImages = async (folderId?: string): Promise<GalleryResponse> => {
    const url = folderId ? `/gallery?folderId=${folderId}` : "/gallery";
    const { data } = await apiClient.get<GalleryResponse>(url);
    return data;
};

export const uploadGalleryImage = async (formData: FormData) => {
    // folderId should be appended to formData in the component
    const { data } = await apiClient.post("/gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

export const deleteGalleryImage = async (id: string) => {
    const { data } = await apiClient.delete(`/gallery/${id}`);
    return data;
};

export const bulkDeleteGalleryImages = async (ids: string[]) => {
    const { data } = await apiClient.post("/gallery/bulk-delete", { ids });
    return data;
};
