import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/services/category.service";
import { extractArray } from "@/utils/formatters";
import type { Category } from "@/types/category";

export function useCategories() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
        staleTime: 5 * 60 * 1000, // categories rarely change — cache for 5 min
    });

    const categories: Category[] = extractArray<Category>(data, "categories");

    return { categories, isLoading, error };
}
