import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

function Sidebar() {
  return (
    <div>
        <GiHamburgerMenu/>
      <ul className='flex flex-col hidden items-center justify-center gap-6'>
        <li><a href="/">Shop</a></li>
        <li><a href="/">OnSale</a></li>
        <li><a href="/">NewArrivals</a></li>
        <li><a href="/">Brands</a></li>
      </ul>
    </div>
  )
}

export default Sidebar
