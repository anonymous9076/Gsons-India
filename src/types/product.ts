export interface ProductImage {
    url: string;
    public_id?: string;
}

export interface Variant {
    _id: string;
    sku: string;
    price: number;
    stock: number;
    images: ProductImage[];
    attributes: Record<string, any>;
    isActive: boolean;
}

export interface Product {
    _id: string;
    name: string;
    description?: string;
    price: number;
    originalPrice?: number;
    category?: { _id: string; name: string } | string;
    images: ProductImage[];
    rating?: number;
    reviews?: number;
    isSale?: boolean;
    slug?: string;
    stock?: number;
    createdAt?: string;
    variants?: Variant[];
    code?: string;
    material?: string;
    type?: string;
}

export interface ProductFilters {
    keyword?: string;
    category?: string;
    maxPrice?: number;
    sort?: string;
    page?: number;
    limit?: number;
}

export interface ProductsResponse {
    data: Product[];
    total: number;
    totalPages?: number;
    currentPage?: number;
    filteredCount?: number;
}
