import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa'; // นำเข้าไอคอนแก้ไขโปรไฟล์

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <nav className='bg-red-600 p-4 flex justify-between items-center'>
      <div className='flex items-center ml-4 sm:ml-10'>
        <span className='text-white text-2xl sm:text-3xl font-bold'>SuperMart</span>
      </div>

      <form onSubmit={handleSearch} className='flex flex-grow max-w-lg mx-4'>
        <input 
          type='text' 
          placeholder='ค้นหาสินค้าหรือแบรนด์' 
          className='p-2 rounded-l-lg border-none outline-none w-full text-gray-700'
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit' className='bg-red-700 text-white px-4 rounded-r-lg'>🔍</button>
      </form>

      <div className='flex items-center space-x-2'>
        <NavLink to='/profile' className='text-white hover:text-gray-200 transition'>
          <FaUserEdit className='text-2xl' /> {/* ไอคอนแก้ไขโปรไฟล์ */}
        </NavLink>
        <NavLink to='/login' className='border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-red-600 transition'>
          เข้าสู่ระบบ
        </NavLink>
        <NavLink to='/register' className='bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition'>
          สมัครสมาชิก
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;