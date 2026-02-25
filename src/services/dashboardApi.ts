import API from "./api";

export const getDashboardStats = async () => {
    const { data } = await API.get("/admin/dashboard-stats");
    return data;
};
