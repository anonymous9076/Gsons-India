import API from "./api";

export interface ContactData {
    name: string;
    email: string;
    message: string;
}

export const sendContactEmail = async (contactData: ContactData) => {
    const { data } = await API.post("/contact", contactData);
    return data;
};
