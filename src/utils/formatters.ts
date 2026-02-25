/**
 * Format a number as Indian Rupee currency.
 */
export function formatPrice(value: string | number): string {
    const num = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(num)) return "—";
    return `₹${num.toLocaleString("en-IN")}`;
}

/**
 * Safely extract an array from an API response regardless of response shape.
 * Tries `data[key]` first, then falls back to `data` itself.
 */
export function extractArray<T>(data: unknown, key: string): T[] {
    if (!data) return [];
    const obj = data as Record<string, unknown>;
    if (Array.isArray(obj[key])) return obj[key] as T[];
    if (Array.isArray(data)) return data as T[];
    return [];
}

/**
 * Build a URL query string from a plain object, skipping empty/nullish values.
 */
export function buildQueryString(params: Record<string, string | number | undefined | null>): string {
    return Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== null && v !== "")
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join("&");
}
