import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/api';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ประวัติคำสั่งซื้อ</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">คำสั่งซื้อ #{order.id}</h3>
            <p className="text-gray-700">สถานะ: {order.status}</p>
            <div className="mt-2">
              {order.OrderItems.map((item) => (
                <div key={item.id} className="border-t pt-2">
                  <p className="text-gray-700">{item.product.name}</p>
                  <p className="text-gray-700">{item.quantity} ชิ้น</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;