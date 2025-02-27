import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter((item) => item.quantity > 0); // ลบสินค้าที่มีจำนวนเป็น 0
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h2>
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>ราคา: {item.price} บาท</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="px-2 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500"
                >
                  -
                </button>
                <p>จำนวน: {item.quantity}</p>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="px-2 py-1 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-500"
                >
                  +
                </button>
              </div>
              <p>รวม: {(item.price * item.quantity).toFixed(2)} บาท</p>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="mt-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500"
              >
                ลบออกจากตะกร้า
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">ไม่มีสินค้าในตะกร้า</p>
        )}
      </div>
    </div>
  );
};

export default Cart;