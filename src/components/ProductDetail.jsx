import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getAllProducts();
        const foundProduct = response.data.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <img src={product.picture} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-700">{product.description}</p>
      <p className="text-gray-700">{product.price} บาท</p>
      <p className="text-gray-700">สต็อก: {product.stock}</p>
    </div>
  );
};

export default ProductDetail;