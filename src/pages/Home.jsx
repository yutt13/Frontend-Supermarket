import React from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <div className='max-w-7xl mx-auto p-8 text-center'>
        <h1 className='text-5xl font-extrabold text-gray-800 mb-6'>
          ยินดีต้อนรับสู่ <span className='text-green-600'>SuperMart</span>
        </h1>
        <p className='text-lg text-gray-600'>
          สินค้าคุณภาพ ราคาคุ้มค่า พร้อมโปรโมชั่นสุดพิเศษสำหรับคุณ!
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-10'>
        <NavLink to='/products' className='flex flex-col items-center bg-green-500 text-white rounded-lg px-6 py-6 font-bold shadow-lg hover:bg-green-600 transition duration-300'>
          <span className='text-2xl'>🛍️</span>
          <span className='mt-2 text-lg'>เลือกซื้อสินค้า</span>
        </NavLink>
        <NavLink to='/promotions' className='flex flex-col items-center bg-yellow-500 text-white rounded-lg px-6 py-6 font-bold shadow-lg hover:bg-yellow-600 transition duration-300'>
          <span className='text-2xl'>🔥</span>
          <span className='mt-2 text-lg'>โปรโมชั่นพิเศษ</span>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center bg-blue-500 text-white rounded-lg px-6 py-6 font-bold shadow-lg hover:bg-blue-600 transition duration-300'>
          <span className='text-2xl'>📞</span>
          <span className='mt-2 text-lg'>ติดต่อเรา</span>
        </NavLink>
      </div>

      <div className='flex flex-col items-center p-12'>
        
        <p className='text-lg text-gray-700 font-semibold'>
          SuperMart - ห้างสรรพสินค้าที่คุณไว้วางใจ
        </p>
      </div>
    </Layout>
  );
};

export default Home;
