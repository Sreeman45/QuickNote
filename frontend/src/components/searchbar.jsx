
import React, { useState, useRef, useEffect, useContext } from 'react';
import { emailcontext } from './routes/HomePage';
import { Button } from './ui/button';
const Searchbar =() => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const{setSearch}=useContext(emailcontext)
  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setSearch(term.toLowerCase())
  };

  const handleClear = () => {
    setSearchTerm('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
     
    }
  };

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div className="relative  w-full md:w-[70%] sm:w-[70%] lg:w-[95%] mx-auto mt-5">
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 bg-white shadow-sm focus-within:ring-1 focus-within:ring-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          ref={searchInputRef}
          className="w-full border-none focus:outline-none bg-transparent"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
   
        {searchTerm && (
          <button onClick={handleClear} className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export {Searchbar};
