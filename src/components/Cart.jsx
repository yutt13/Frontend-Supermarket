import React, { useState, useEffect } from 'react';
import { addToCart, createOrder } from '../services/api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCheckout = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await createOrder({ customerId: user.id });
      alert('Order created successfully!');
      setCartItems([]);
    } catch (error) {
      alert('Failed to create order');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{item.product.name}</h3>
            <p className="text-gray-700">{item.quantity} ชิ้น</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleCheckout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
      >
        ชำระเงิน
      </button>
    </div>
  );
};

export default Cart;