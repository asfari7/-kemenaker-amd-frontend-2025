import API from "../api/config";
import { ENDPOINTS } from "../api/endpoints";

export const getProduct = async () => {
  const response = await API.get(ENDPOINTS.PRODUCTS);
  return response.data;
};

export const createProduct = async (payload) => {
  const response = await API.post(`${ENDPOINTS.PRODUCTS}/add`, payload);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await API.delete(`${ENDPOINTS.PRODUCTS}/${id}`);
  return response.data;
};

export const updateProduct = async ({ id, data }) => {
  const response = await API.put(`${ENDPOINTS.PRODUCTS}/${id}`, data);
  return response.data;
};
