import React ,{ useEffect, useState } from 'react'
import { register } from '../services/api';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate สำหรับการนำทาง
import arrow from '../img/arrow.png'; // นำเข้าไฟล์ PNG


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); 
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await register({ name, email, password });
        alert('Registration successful!');
        console.log("Success:", response);
        navigate('/login');
      } catch (error) {
        alert('Registration failed');
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <button
                      onClick={() => navigate(-1)} // ใช้ navigate(-1) เพื่อกลับหน้าเดิม
                      className="absolute left-6 flex text-gray-600 hover:text-gray-800 transition mb-4"
                    >
                      <img src={arrow} alt="กลับ" className="w-6 h-6 mr-2" /> กลับ
                    </button>
          <h2 className="text-2xl font-bold text-center text-red-600">สมัครสมาชิก SuperMart</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="กรอกชื่อของคุณ"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">อีเมล</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="กรอกอีเมลของคุณ"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="กรอกรหัสผ่านของคุณ"
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="confirm"
                name="confirm"
                type="checkbox"
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                required
              />
              <label htmlFor="confirm" className="ml-2 text-sm text-gray-900">
                ฉันยอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500"
            >
              สมัครสมาชิก
            </button>
          </form>
  
          {/* ตัวเลือกเพิ่มเติม */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              มีบัญชีอยู่แล้ว?{' '}
              <a href="/login" className="font-medium text-red-600 hover:text-red-500">
                เข้าสู่ระบบ
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
export default Register