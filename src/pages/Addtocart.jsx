import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import arrow from '../img/arrow.png'; // นำเข้าไฟล์ PNG
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate สำหรับการนำทาง

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // ลบสินค้าที่มีจำนวนเป็น 0
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    // แสดง alert เมื่อชำระเงิน
    alert("ชำระเงินเรียบร้อยแล้ว!");
    // คุณสามารถเพิ่มโค้ดเพิ่มเติมในการจัดการการชำระเงินได้ที่นี่
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate(-1)} // ใช้ navigate(-1) เพื่อกลับหน้าเดิม
        className="absolute left-6 flex text-gray-600 hover:text-gray-800 transition mb-4"
      >
        <img src={arrow} alt="กลับ" className="w-6 h-6 mr-2" /> กลับ
      </button>
      <h2 className="pt-4 text-3xl font-bold text-gray-800 mb-6">ตะกร้าสินค้า</h2>
      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-2">ราคา: {item.price} บาท</p>
              <div className="flex items-center space-x-4 mb-4">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500 transition-colors duration-200"
                >
                  -
                </button>
                <p className="text-gray-700">จำนวน: {item.quantity}</p>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors duration-200"
                >
                  +
                </button>
              </div>
              <p className="text-gray-800 font-medium mb-4">
                รวม: {(item.price * item.quantity).toFixed(2)} บาท
              </p>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className=" px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500 transition-colors duration-200"
              >
                ลบออกจากตะกร้า
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">ไม่มีสินค้าในตะกร้า</p>
        )}
        <div className="pt-4">
          <button
            onClick={handleCheckout} // ผูกฟังก์ชันกับปุ่มชำระเงิน
            className=" bg-sky-500 text-white rounded-lg px-4 py-4 font-bold shadow-lg hover:bg-green-600 transition duration-300"
          >
            <span className="mt-2 text-lg">ชำระเงิน</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
