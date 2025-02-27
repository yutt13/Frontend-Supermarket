import React, { useState, useEffect } from 'react';
import { getAllCategories, deleteCategory } from '../services/api';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      setCategories(categories.filter((category) => category.id !== id));
      alert('Category deleted successfully!');
    } catch (error) {
      alert('Failed to delete category');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">จัดการประเภทสินค้า</h2>
      <Link to="/add-category" className="mb-4 inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
        เพิ่มประเภทสินค้า
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{category.name}</h3>
            <button
              onClick={() => handleDelete(category.id)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
            >
              ลบ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;