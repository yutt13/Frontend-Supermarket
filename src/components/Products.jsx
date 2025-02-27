import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate สำหรับการนำทาง
import Layout from './Layout';
import arrow from '../img/arrow.png'; // นำเข้าไฟล์ PNG

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

  useEffect(() => {
    // เรียกข้อมูลสินค้าจาก backend (API)
    fetch('/api/products') // เปลี่ยน URL เป็น API จริงของคุณ
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Layout>
      <div className="relative p-6"> {/* ใช้ relative เพื่อเป็น reference สำหรับ absolute */}
        {/* ปุ่มกลับหน้าเดิม */}
        <button
          onClick={() => navigate(-1)} // ใช้ navigate(-1) เพื่อกลับหน้าเดิม
          className="absolute left-6 flex text-gray-600 hover:text-gray-800 transition mb-4"
        >
          <img src={arrow} alt="กลับ" className="w-6 h-6 mr-2" /> กลับ
        </button>

        <h1 className='text-4xl font-bold text-center py-6'>
          สินค้าทั้งหมด
        </h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map(product => (
            <div key={product.id} className='border rounded-lg p-4 shadow-lg'>
              <img src={product.image} alt={product.name} className='w-full h-40 object-cover rounded' />
              <h2 className='text-lg font-semibold mt-2'>{product.name}</h2>
              <p className='text-red-600 font-bold text-lg'>{product.price} บาท</p>
              <button className='mt-2 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition'>
                ใส่รถเข็น
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;