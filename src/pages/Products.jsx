import React, { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct } from '../services/api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate สำหรับการนำทาง
import arrow from '../img/arrow.png';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
      alert('Product deleted successfully!');
    } catch (error) {
      alert('Failed to delete product');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        
      <div className="max-w-7xl mx-auto">
        {/* หัวข้อและปุ่มเพิ่มสินค้า */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">จัดการสินค้า</h2>
          <Link
            to="/add-product"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
          >
            เพิ่มสินค้า
          </Link>
        </div>

        {/* กริดแสดงสินค้า */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* รูปภาพสินค้า */}
              <img
                src={product.picture}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              {/* ข้อมูลสินค้า */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold text-blue-600 mb-2">{product.price} บาท</p>
                <p className="text-sm text-gray-500">สต็อก: {product.stock} ชิ้น</p>
              </div>

              {/* ปุ่มแก้ไขและลบ */}
              <div className="p-4 bg-gray-50 flex justify-end space-x-2">
                <Link
                  to={`/edit-product/${product.id}`}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 transition duration-300"
                >
                  แก้ไข
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition duration-300"
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;