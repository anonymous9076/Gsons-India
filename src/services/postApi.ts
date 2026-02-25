import API from "./api";

// Public: Get All Posts
export const getAllPosts = async () => {
    const { data } = await API.get("/posts");
    return data;
};

// Public: Get Post By ID
export const getPostById = async (id: string) => {
    const { data } = await API.get(`/post/${id}`);
    return data;
};

// Admin: Create Post
export const createPost = async (postData: FormData) => {
    const { data } = await API.post("/admin/post/new", postData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

// Admin: Update Post
export const updatePost = async (id: string, postData: FormData) => {
    const { data } = await API.post(`/admin/post/${id}`, postData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

// Admin: Delete Post
export const deletePost = async (id: string) => {
    const { data } = await API.delete(`/admin/post/${id}`);
    return data;
};

// Private: Like Post
export const likePost = async (id: string) => {
    const { data } = await API.put(`/post/like/${id}`);
    return data;
};
