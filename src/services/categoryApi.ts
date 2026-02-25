/**
 * Backward-compatible re-exports.
 * New code should import from @/services/category.service directly.
 */
export {
    fetchCategories as getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} from "@/services/category.service";
