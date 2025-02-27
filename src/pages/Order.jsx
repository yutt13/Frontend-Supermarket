import React, { useState } from 'react';
import axios from 'axios';

const Order = ({ customerId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleCreateOrder = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // ส่งคำขอไปยัง API เพื่อสร้างคำสั่งซื้อ
      const response = await axios.post('/user/orders', { customerId });

      if (response.status === 201) {
        setSuccess(true); // แสดงข้อความสำเร็จ
        // ล้างตะกร้าหรืออัปเดต UI ตามต้องการ
      } else {
        setError('Failed to create order');
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.error || 'Failed to create order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">สร้างคำสั่งซื้อ</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && (
        <p className="text-green-500 mb-4">สร้างคำสั่งซื้อสำเร็จ!</p>
      )}

      <button
        onClick={handleCreateOrder}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
      >
        {loading ? 'กำลังสร้างคำสั่งซื้อ...' : 'สร้างคำสั่งซื้อ'}
      </button>
    </div>
  );
};

export default Order;