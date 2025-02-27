import React, { useState, useEffect } from 'react';
import { searchProducts } from '../services/api';

const SearchResults = ({ keyword }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await searchProducts(keyword);
        setProducts(response.data);
      } catch (error) {
        console.error('Search failed:', error);
      }
    };
    fetchProducts();
  }, [keyword]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ผลการค้นหา: {keyword}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">{product.price} บาท</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;