import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiShoppingCart } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'

function Icon() {
    return (
        <div className='flex items-center justify-center text-2xl gap-3 '>
            <IoSearch />
            < FiShoppingCart />
            <CgProfile />
        </div>
    )
}

export default Icon
