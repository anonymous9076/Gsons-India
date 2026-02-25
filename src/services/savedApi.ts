import API from "./api";

// Get Saved Items
export const getSavedItems = async () => {
    const { data } = await API.get("/get-saved-item");
    return data;
};

// Toggle Saved Item
export const toggleSavedItem = async (id: string) => {
    const { data } = await API.post(`/toggle-save-item/${id}`);
    return data;
};
