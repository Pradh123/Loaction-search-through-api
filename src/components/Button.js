import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const Button = () => {
  return (
    <button className=' bg-red-600 flex items-center text-white py-3 px-10 m-2 rounded-full me-2'><IoSearchSharp className='text-2xl'/><span className='px-2 text-2xl'>Search</span></button>
  )
}

export default Button