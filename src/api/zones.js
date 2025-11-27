import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const listZones = async () => {
    const response = await api.get("/zones");
    return response.data;
};

export const getZone = async (id) => {
    const response = await api.get(`/zones/${id}`);
    return response.data;
};

export const createZone = async (zone) => {
    const response = await api.post("/zones", zone);
    return response.data;
};

export const updateZone = async (id, zone) => {
    const response = await api.patch(`/zones/${id}`, zone);
    return response.data;
};

export const deleteZone = async (id) => {
    await api.delete(`/zones/${id}`);
    return { success: true };
};
