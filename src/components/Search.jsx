import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?keyword=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className='flex flex-grow max-w-lg mx-4'>
      <input 
        type='text' 
        placeholder='ค้นหาสินค้าหรือแบรนด์' 
        className='p-2 rounded-l-lg border-none outline-none w-full text-gray-700'
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button 
        type='submit' 
        className='bg-red-700 text-white px-4 rounded-r-lg hover:bg-red-800 transition-colors'
      >
        🔍
      </button>
    </form>
  );
};

export default SearchForm;