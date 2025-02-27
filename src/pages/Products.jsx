import React, { useState, useEffect } from "react";
import { getAllProducts, deleteProduct } from "../services/api";
import { Link } from "react-router-dom";
import arrow from "../img/arrow.png";
import Layout from "../components/Layout";
import { FaShoppingCart } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
      alert("Product deleted successfully!");
    } catch (error) {
      alert("Failed to delete product");
    }
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // หากสินค้ามีอยู่แล้วในตะกร้า ให้เพิ่มจำนวน
      existingItem.quantity += 1;
    } else {
      // หากสินค้าไม่มีในตะกร้า ให้เพิ่มเป็นรายการใหม่
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // บันทึกลง localStorage
    setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0)); // อัปเดตจำนวนสินค้าในตะกร้า
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <button
          onClick={() => window.history.back()}
          className="absolute left-6 flex text-gray-600 hover:text-gray-800 transition mb-4"
        >
          <img src={arrow} alt="กลับ" className="w-6 h-6 mr-2" /> กลับ
        </button>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">เลือกสินค้า</h2>
            <Link
              to="/cart"
              className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300 flex items-center justify-center relative"
            >
              <FaShoppingCart className="text-3xl" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={product.picture}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-lg font-bold text-blue-600 mb-2">
                    {product.price} บาท
                  </p>
                  <p className="text-sm text-gray-500">
                    สต็อก: {product.stock} ชิ้น
                  </p>
                </div>
                <div className="p-4 bg-gray-50 flex justify-end space-x-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-orange-400 transition duration-300"
                  >
                    ใส่ตะกร้า
                  </button>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;