import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(), // สร้าง ID แบบง่ายๆ
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };
    setCartItems([...cartItems, newItem]);
    setName('');
    setPrice('');
    setQuantity('');
    alert('สินค้าถูกเพิ่มลงในตะกร้า!');
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h2>
      
      {/* Form สำหรับเพิ่มสินค้า */}
      <form onSubmit={handleAddToCart} className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700">ชื่อสินค้า</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">ราคา</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">จำนวน</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500"
        >
          เพิ่มสินค้าใส่ในตะกร้า
        </button>
      </form>

      {/* แสดงรายการสินค้าในตะกร้า */}
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>ราคา: {item.price} บาท</p>
              <p>จำนวน: {item.quantity}</p>
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