import React from 'react'
import { useState } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSafeFill } from 'react-icons/bs'
import { TbTruckDelivery } from "react-icons/tb"
import { MdFavorite, MdHelp } from "react-icons/md"
import { FaWallet, FaUserFriends } from "react-icons/fa"
const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <header className='px-28 py-3 flex justify-between items-center max-w-[1640px]'>
            <div className='flex justify-between items-center w-[300px]  '>
                <div className='flex items-center '>
                    <div><AiOutlineMenu onClick={() => setNav(!nav)} size={30} className='cursor-pointer' /></div>
                    <div className='text-2xl pl-2 sm:text-xl lg:text-3xl'>Best<span className='font-bold pl-1 text-2xl sm:text-xl lg:text-3xl'>Eats</span></div>
                </div>

                <div className='hidden lg:flex items-center bg-gray-200 px-1  ml-1 rounded-full'>
                    <p className='bg-black text-white rounded-full p-1'>Delivery</p>
                    <p className='px-1'>Pick-up</p>
                </div>
            </div>
            <div className='bg-gray-200 lg:w-[600px] md:w-[500px] hidden sm:flex items-center px-2 rounded-full mx-1 '>
                <AiOutlineSearch size={30} className='hover:bg-gray-300 rounded-full text-center ' />
                <input className='bg-transparent  p-2 w-full focus:outline-none' placeholder='Search Food...' />
            </div>
            <div className='bg-black text-white flex rounded-full py-2 px-5'>
                <BsFillCartFill size={25} />
                Cart
            </div>
            {nav ? <div className='fixed top-0 left-0 w-full h-screen bg-black/80'></div> : ''}

            <div className={nav ? "bg-white w-[300px] absolute top-0 left-0 h-screen z-40 duration-300" : "absolute left-[-150px]"}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={25} className='absolute right-4 top-4 cursor-pointer hover:bg-gray-200 hover:rounded-full hover:p-2' />
                <div className='text-2xl mb-3 mt-10 pl-3'>Best<span className='font-bold pl-1 text-2xl'>Eats</span></div>
                <ul className='pl-4'>
                    <li className='flex py-4 tex-xl'><TbTruckDelivery size={25} className='mr-4' />Orders</li>
                    <li className='flex py-4 tex-xl'><MdFavorite size={25} className='mr-4' />Favorites</li>
                    <li className='flex py-4 tex-xl'><FaWallet size={25} className='mr-4' />Wallet</li>
                    <li className='flex py-4 tex-xl'><MdHelp size={25} className='mr-4' />Help</li>
                    <li className='flex py-4 tex-xl'><AiFillTag size={25} className='mr-4' />Promotions</li>
                    <li className='flex py-4 tex-xl'><BsFillSafeFill size={25} className='mr-4' />Best Ones</li>
                    <li className='flex py-4 tex-xl'><FaUserFriends size={25} className='mr-4' />Invite Friends</li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar