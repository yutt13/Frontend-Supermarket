import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate สำหรับการนำทาง
import arrow from '../img/arrow.png'; // นำเข้าไฟล์ PNG

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    try {
      const response = await login({ email, password });
      localStorage.setItem('user', JSON.stringify(response.user));
      alert('Login successful!');
      navigate('/');
    } catch (error) {
      alert('Invalid credentials');
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
        
        <h2 className="text-2xl font-bold text-center text-red-600">เข้าสู่ระบบ SuperMart</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
                จดจำฉัน
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-red-600 hover:text-red-500">
                ลืมรหัสผ่าน?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        {/* ตัวเลือกเพิ่มเติม */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            ยังไม่มีบัญชี?{' '}
            <a href="/register" className="font-medium text-red-600 hover:text-red-500">
              สมัครสมาชิก
            </a>
          </p>
        </div>

        {/* ล็อกอินด้วยโซเชียลมีเดีย */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;