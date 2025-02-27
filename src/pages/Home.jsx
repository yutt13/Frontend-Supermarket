import React from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-r from-green-500 to-green-700 py-20 text-white overflow-hidden'>
        <div className='max-w-7xl mx-auto px-8 text-center'>
          <h1 className='text-6xl font-extrabold mb-6 animate-fade-in-up'>
            ยินดีต้อนรับสู่ <span className='text-yellow-300'>SuperMart 2025</span>
          </h1>
          <p className='text-2xl mb-8 animate-fade-in-up delay-100'>
            สินค้าคุณภาพ ราคาคุ้มค่า พร้อมโปรโมชั่นสุดพิเศษสำหรับคุณ!
          </p>
          <div className='animate-fade-in-up delay-200'>
            <NavLink
              to='/products'
              className='inline-block bg-white text-green-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-green-50 transition duration-300'
            >
              เริ่มช้อปปิ้งเลย
            </NavLink>
          </div>
        </div>
        <div className='absolute -bottom-20 left-0 right-0 h-40 bg-white transform skew-y-3'></div>
      </div>

      {/* Feature Cards */}
      <div className='max-w-7xl mx-auto px-8 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <NavLink
            to='/products'
            className='flex flex-col items-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2'
          >
            <div className='bg-green-100 p-6 rounded-full mb-6'>
              <span className='text-4xl text-green-600'>🛍️</span>
            </div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>เลือกซื้อสินค้า</h2>
            <p className='text-gray-600 text-center'>
              ค้นหาสินค้าคุณภาพสูงจากหลากหลายหมวดหมู่
            </p>
          </NavLink>
          <NavLink
            to='/promotions'
            className='flex flex-col items-center bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2'
          >
            <div className='bg-yellow-100 p-6 rounded-full mb-6'>
              <span className='text-4xl text-yellow-600'>🔥</span>
            </div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>โปรโมชั่นพิเศษ</h2>
            <p className='text-gray-600 text-center'>
              ข้อเสนอสุดคุ้มที่คุณไม่ควรพลาด
            </p>
          </NavLink>
          <NavLink
            to='/contact'
            className='flex flex-col items-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2'
          >
            <div className='bg-blue-100 p-6 rounded-full mb-6'>
              <span className='text-4xl text-blue-600'>📞</span>
            </div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>ติดต่อเรา</h2>
            <p className='text-gray-600 text-center'>
              เราพร้อมให้บริการคุณทุกวัน
            </p>
          </NavLink>
        </div>
      </div>

      {/* About Section */}
      <div className='bg-gray-50 py-20'>
        <div className='max-w-7xl mx-auto px-8 text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>
            SuperMart 2025 - ห้างสรรพสินค้าแห่งอนาคต
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            เรามุ่งมั่นที่จะนำเสนอสินค้าคุณภาพสูงและบริการที่ยอดเยี่ยม เพื่อตอบสนองความต้องการของลูกค้าทุกท่าน
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;