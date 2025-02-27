import axios from 'axios';

const api = axios.create({
  baseURL: 'https://project-supermarket.onrender.com', // เปลี่ยนเป็น URL ของ Backend
});

export const register = async (data) => {
  try {
    const response = await api.post('/user/register', data);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error.response?.data || error.message);
    throw error;
  }
};
export const login = async (data) => {
  try {
    const response = await api.post('/user/login', data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};
export const updateUser = (id, data) => api.put(`/user/${id}`, data);
export const searchProducts = (keyword) => api.get(`/user/products/search?keyword=${keyword}`);
export const getProductsByCategory = (categoryId) => api.get(`/user/products/category/${categoryId}`);
export const addToCart = (data) => api.post('/user/cart', data);
export const createOrder = (data) => api.post('/user/orders', data);

export const getAllProducts = () => api.get('/admin/products',);
export const addProduct = (data) => api.post('/admin/products', data);
export const deleteProduct = (id) => api.delete(`/admin/products/${id}`);
export const updateProduct = (id, data) => api.put(`/admin/products/${id}`, data);

// Category APIs
export const getAllCategories = () => api.get('/admin/categories');
export const addCategory = (data) => api.post('/admin/categories', data);
export const deleteCategory = (id) => api.delete(`/admin/categories/${id}`);

// Order APIs
export const getOrders = () => api.get('/admin/orders');

export default api;