import React from 'react'
import shopLogo from "/navbar/SHOP.CO.png"
import Menu from './Menu'
import searchicon from "/navbar/search.png"
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from 'react-icons/cg';
import Sidebar from './Sidebar';
import Icon from './Icon';
function Navbar() {
  return (
    // <div className='flex items-center justify-center '>
    <div className='flex items-center justify-between md:mx-[100px] md:my-[24px] mx-4 my-5 '>
      <div className=' flex items-center justify-center '>
      <div className='block md:hidden  ' >
        <Sidebar/>
      </div>
        <img className='w-[126px] md:w-auto' src={shopLogo} alt="shop.co" />
        
      </div>
      <div className='md:block hidden' >
        <Menu />
      </div>
     
      <div className='relative md:block hidden '>
        <input className='bg-[#F0F0F0] w-[577px] py-4 px-3 rounded-full  outline-none pl-12' type="text" placeholder='Search for products' />
        <img className="absolute top-[17px] left-[11px]" src={searchicon} alt="searchicon" />
      </div>
      <div className='  items-center justify-center gap-[14px] md:flex hidden'>
        < FiShoppingCart />
        <CgProfile />

      </div>
      <div className='md:hidden block'>
        <Icon/>
      </div>
    </div>
    // </div>
  )
}

export default Navbar
