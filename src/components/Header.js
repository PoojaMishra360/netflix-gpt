import React, { use, useState } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const user = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSignOut = () => {
    // Implement sign-out logic here
    console.log("User signed out");
    signOut(auth).then(() => {
      navigate("/");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }

  return (
    <div className='fixed w-full px-8 py-4 bg-gradient-to-b from-black via-black/80 to-transparent z-50 flex items-center justify-between'>
      {/* Logo and Navigation */}
      <div className='flex items-center gap-8'>
        <img 
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          alt="Netflix Logo" 
          className='w-24 h-auto cursor-pointer'
        />
        
        {/* Navigation Menu */}
        <nav className='hidden md:flex items-center gap-6 text-white text-sm'>
          <a href='#' className='hover:text-gray-300 transition'>Home</a>
          <a href='#' className='hover:text-gray-300 transition'>Shows</a>
          <a href='#' className='hover:text-gray-300 transition'>Movies</a>
          <a href='#' className='hover:text-gray-300 transition'>Games</a>
          <a href='#' className='hover:text-gray-300 transition'>New & Popular</a>
          <a href='#' className='hover:text-gray-300 transition'>My List</a>
          <a href='#' className='hover:text-gray-300 transition'>Browse by Languages</a>
        </nav>
      </div>

      {/* Right Side Icons */}
      <div className='flex items-center gap-6'>
        {/* Search */}
        <div className='relative'>
          {showSearch ? (
            <input
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='bg-black text-white border border-gray-500 rounded px-3 py-2 text-sm w-48 focus:outline-none'
              autoFocus
            />
          ) : (
            <Search 
              size={20} 
              className='text-white cursor-pointer hover:text-gray-300 transition'
              onClick={() => setShowSearch(true)}
            />
          )}
        </div>

        {/* Children */}
        <button className='text-white text-sm hover:text-gray-300 transition'>
          Children
        </button>

        {/* Notifications */}
        <Bell 
          size={20} 
          className='text-white cursor-pointer hover:text-gray-300 transition'
        />

        {/* Profile Menu */}
        <div className='relative'>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className='flex items-center gap-2 text-white hover:text-gray-300 transition'
          >
            <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center text-xs font-bold'>
              U
            </div>
            <ChevronDown size={18} />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className='absolute right-0 mt-2 bg-black/95 border border-gray-600 rounded py-2 w-40 text-white text-sm'>
              <a href='#' className='block px-4 py-2 hover:bg-gray-700 transition'>Profile</a>
              <a href='#' className='block px-4 py-2 hover:bg-gray-700 transition'>Account</a>
              <a href='#' className='block px-4 py-2 hover:bg-gray-700 transition'>Settings</a>
              <hr className='border-gray-600 my-1' />
              <a onClick={handleSignOut} href='#' className='block px-4 py-2 hover:bg-gray-700 transition text-red-500'>Sign out</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
