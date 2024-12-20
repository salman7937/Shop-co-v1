import React, { useState, useRef, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

function Sidebar() {
  const [IsOpen, setIsOpen] = useState(false)
  const sideRef = useRef()

  const handleHamBurger = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleClickOutside = (e) => {
    if (sideRef.current && !sideRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])



  return (
    <div>
      <GiHamburgerMenu className='cursor-pointer text-2xl mr-4' onClick={handleHamBurger} />
      {IsOpen &&
        <div ref={sideRef} className='bg-black text-white min-h-screen fixed top-0 left-0 px-6 pt-12 z-50 transition-all duration-500   '>
          <RxCross2 className='relative bottom-10 -right-20 cursor-pointer' onClick={handleClose} />
          <ul className='flex flex-col  items-center justify-center gap-6'>
            <li><a href="/">Shop</a></li>
            <li><a href="/">OnSale</a></li>
            <li><a href="/">NewArrivals</a></li>
            <li><a href="/">Brands</a></li>
          </ul>
        </div>}
    </div>
  )
}

export default Sidebar
