export interface CategoryImage {
    url: string;
    public_id?: string;
}

export interface Category {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    image?: CategoryImage;
    isActive?: boolean;
}

export interface CategoriesResponse {
    categories: Category[];
}
