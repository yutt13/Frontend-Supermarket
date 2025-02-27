import React from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate สำหรับการนำทาง
import arrow from '../img/arrow.png'; // นำเข้าไฟล์ PNG

const Promotions = () => {
  // ข้อมูลโปรโมชั่นตัวอย่าง
  const navigate = useNavigate();
  const promotions = [
    {
      id: 1,
      title: 'โปรโมชั่นพิเศษ สินค้าลดราคา 50%',
      description: 'ลดราคาสินค้าเลือกสรรมากมาย สูงสุด 50% เฉพาะเดือนนี้เท่านั้น!',
      image: '/img/sanisu.jpg', // เปลี่ยนเป็นลิงก์รูปภาพจริง
      link: '/promotion/1',
    },
    {
      id: 2,
      title: 'ซื้อ 1 แถม 1 ฟรี!',
      description: 'ซื้อสินค้าในหมวดเครื่องดื่ม 1 ชิ้น แถมฟรี 1 ชิ้นทันที',
      image: '/img/9rnnd5.jpg', // เปลี่ยนเป็นลิงก์รูปภาพจริง
      link: '/promotion/2',
    },
    {
      id: 3,
      title: 'ส่วนลดสุดคุ้ม ',
      description: 'ไม่มีขั้นต่ำการซื้อ ลดสูงสุด250บาท สำหรับสมาชิก SuperMart',
      image: '/img/cc.jpg', // เปลี่ยนเป็นลิงก์รูปภาพจริง
      link: '/promotion/3',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-r from-orange-400 to-orange-600 py-20 text-white overflow-hidden'>
      <button
                      onClick={() => navigate(-1)} // ใช้ navigate(-1) เพื่อกลับหน้าเดิม
                      className="absolute left-6 flex text-white hover:text-gray-800 transition mb-4"
                    >
                      <img src={arrow} alt="กลับ" className="w-6 h-6 mr-2" /> กลับ
                    </button>
        <div className='max-w-7xl mx-auto px-8 text-center'>
            
          <h1 className='text-6xl font-extrabold mb-6 animate-fade-in-up'>
            โปรโมชั่นสุดพิเศษ
          </h1>
          <p className='text-2xl mb-8 animate-fade-in-up delay-100'>
            ค้นพบข้อเสนอสุดคุ้มจาก SuperMart ที่คุณไม่ควรพลาด!
          </p>
        </div>
        <div className='absolute -bottom-20 left-0 right-0 h-40 bg-white transform skew-y-3'></div>
      </div>

      {/* Promotion List */}
      <div className='max-w-7xl mx-auto px-8 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {promotions.map((promotion) => (
            <NavLink
              key={promotion.id}
              to={promotion.link}
              className='flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2'
            >
              <img
                src={promotion.image}
                alt={promotion.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  {promotion.title}
                </h2>
                <p className='text-gray-600 mb-4'>{promotion.description}</p>
                <button className='w-full px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-yellow-600 transition-colors duration-200'>
                  ดูรายละเอียด
                </button>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className='bg-gray-50 py-20'>
        <div className='max-w-7xl mx-auto px-8 text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>
            ไม่พลาดทุกโปรโมชั่น!
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-8'>
            สมัครสมาชิก SuperMart วันนี้ เพื่อรับข้อเสนอพิเศษก่อนใคร
          </p>
          <NavLink
            to='/register'
            className='inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-600 transition duration-300'
          >
            สมัครสมาชิกเลย
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Promotions;