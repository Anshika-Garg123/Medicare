import React, { useState } from 'react';
import { assets } from '../assets/assets'; 
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    //const [showMenu, setShowMenu] = useState(false) //
    const [token, setToken] = useState(true)

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
        <img src={assets.logo} alt="Logo" className="w-24" />
        <ul className="flex space-x-6">
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-700'}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/doctors" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-700'}>
                    All Doctors
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-700'}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-700'}>
                    Contact
                </NavLink>
            </li>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                : <button onClick={()=>navigate('/login')} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Create Account</button>
            }
            
        </div>
    </nav>
  );
}

export default Navbar;
