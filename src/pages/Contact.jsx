import React from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate สำหรับการนำทาง
import arrow from '../img/arrow.png'; 

const Contact = () => {
  const navigate = useNavigate(); 
  return (
    <Layout>
      <div className="flex flex-col items-center p-4">

        <button
                              onClick={() => navigate(-1)} // ใช้ navigate(-1) เพื่อกลับหน้าเดิม
                              className="absolute left-6 flex text-gray-600 hover:text-gray-800 transition mb-4"
                            >
                              <img src={arrow} alt="กลับ" className="w-6 h-6 mr-2" /> กลับ
                            </button>
        {/* ส่วนหัว */}
        <div className="flex items-center mb-12">
          <h1 className="text-4xl font-bold text-center">ติดต่อเรา</h1>
        </div>

        {/* เนื้อหา */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ข้อมูลร้าน */}
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-2">SuperMart</h1>
            <p className="text-lg text-center">
              SuperMart คือร้านค้าปลีกออนไลน์และออฟไลน์ที่มอบสินค้าคุณภาพในราคาย่อมเยา พร้อมบริการที่รวดเร็วและเป็นมิตร
            </p>
          </div>

          {/* ที่อยู่ร้าน */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-semibold mb-4">ที่อยู่ร้าน</h1>
            <p className="text-lg">
              123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110
            </p>
            <p className="text-lg mt-2">โทรศัพท์: 02-123-4567</p>
            <p className="text-lg">อีเมล: contact@supermart.com</p>
          </div>

          {/* ติดตามเรา */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-semibold mb-4">ติดตามเรา</h1>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="https://facebook.com/supermart" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="blue"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="https://twitter.com/supermart" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="blue"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/supermart" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;