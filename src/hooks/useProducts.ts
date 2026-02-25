import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/services/product.service";
import { buildQueryString } from "@/utils/formatters";
import type { ProductFilters, ProductsResponse } from "@/types/product";

const LIMIT = 12;

export function useProducts(filters: ProductFilters) {
    const queryString = buildQueryString({
        name: filters.keyword || undefined,
        categoryId: filters.category || undefined,
        maxPrice: filters.maxPrice,
        sort: filters.sort,
        page: filters.page ?? 1,
        limit: filters.limit ?? LIMIT,
    });

    return useQuery<ProductsResponse>({
        queryKey: ["products", filters],
        queryFn: () => fetchProducts(queryString),
        placeholderData: (prev) => prev, // keeps old data while fetching new page (no flicker)
    });
}
