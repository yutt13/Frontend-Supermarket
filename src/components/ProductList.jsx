import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">สินค้าทั้งหมด</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img src={product.picture} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">{product.price} บาท</p>
            <p className="text-gray-700">สต็อก: {product.stock}</p>
            <Link
              to={`/product/${product.id}`}
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              ดูรายละเอียด
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;