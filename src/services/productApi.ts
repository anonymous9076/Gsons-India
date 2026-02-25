/**
 * Backward-compatible re-exports.
 * New code should import from @/services/product.service directly.
 */
export {
    fetchProducts as getAllProducts,
    fetchProductBySlug as getProductBySlug,
    fetchProductById as getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "@/services/product.service";

// Legacy: aliased search helper
import apiClient from "@/lib/apiClient";
export const searchProducts = (q: string) =>
    apiClient.get(`/search?q=${encodeURIComponent(q)}`).then((r) => r.data);
