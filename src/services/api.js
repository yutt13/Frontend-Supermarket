import axios from 'axios';

const api = axios.create({
  baseURL: 'https://project-supermarket.onrender.com', // เปลี่ยนเป็น URL ของ Backend
});

export const register = (data) => api.post('/register', data);
export const login = (data) => api.post('/login', data);
export const updateUser = (id, data) => api.put(`/user/${id}`, data);
export const searchProducts = (keyword) => api.get(`/products/search?keyword=${keyword}`);
export const getProductsByCategory = (categoryId) => api.get(`/products/category/${categoryId}`);
export const addToCart = (data) => api.post('/cart', data);
export const createOrder = (data) => api.post('/orders', data);

export const getAllProducts = () => api.get('/products');
export const addProduct = (data) => api.post('/products', data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);

// Category APIs
export const getAllCategories = () => api.get('/categories');
export const addCategory = (data) => api.post('/categories', data);
export const deleteCategory = (id) => api.delete(`/categories/${id}`);

// Order APIs
export const getOrders = () => api.get('/orders');

export default api;