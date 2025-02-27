import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../img/arrow.png'; // นำเข้าไฟล์ PNG

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const navigate = useNavigate();

  // โหลดข้อมูลลูกค้าจาก API (ตัวอย่าง)
  useEffect(() => {
    const fetchCustomerProfile = async () => {
      try {
        // เรียก API เพื่อดึงข้อมูลลูกค้า
        const response = await fetch('/api/customer-profile');
        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
        setPreviewImage(data.profileImage);
      } catch (error) {
        console.error('Failed to fetch customer profile:', error);
      }
    };
    fetchCustomerProfile();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file)); // แสดงรูปภาพตัวอย่าง
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    try {
      // เรียก API เพื่ออัปเดตข้อมูลลูกค้า
      const response = await fetch('/api/user', {
        method: 'PUT',
        body: formData,
      });
      if (response.ok) {
        alert('อัปเดตโปรไฟล์ลูกค้าสำเร็จ!');
        navigate('/profile'); // กลับไปหน้าโปรไฟล์
      } else {
        alert('อัปเดตโปรไฟล์ลูกค้าไม่สำเร็จ');
      }
    } catch (error) {
      console.error('Failed to update customer profile:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {/* ปุ่มกลับ */}
        <button
          onClick={() => navigate(-1)} // ใช้ navigate(-1) เพื่อกลับหน้าเดิม
          className="absolute left-6 flex text-gray-600 hover:text-gray-800 transition mb-4"
        >
          <img src={arrow} alt="กลับ" className="w-6 h-6 mr-2" /> กลับ
        </button>

        <h2 className="text-2xl font-bold text-center text-red-600">แก้ไขโปรไฟล์ลูกค้า</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ชื่อ */}
          <div>
            <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="กรอกชื่อ"
              required
            />
          </div>

          {/* อีเมล */}
          <div>
            <label className="block text-sm font-medium text-gray-700">อีเมล</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="กรอกอีเมล"
              required
            />
          </div>

          {/* เบอร์โทรศัพท์ */}
          <div>
            <label className="block text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="กรอกเบอร์โทรศัพท์"
              required
            />
          </div>

          {/* ที่อยู่ */}
          <div>
            <label className="block text-sm font-medium text-gray-700">ที่อยู่</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="กรอกที่อยู่"
              required
            />
          </div>

          {/* รูปภาพโปรไฟล์ */}
          <div>
            <label className="block text-sm font-medium text-gray-700">รูปภาพโปรไฟล์</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              accept="image/*"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-2 w-full h-32 object-cover rounded-md"
              />
            )}
          </div>

          {/* ปุ่มอัปเดต */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500"
          >
            อัปเดตโปรไฟล์
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;