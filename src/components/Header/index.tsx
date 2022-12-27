import Link from 'next/link';
import React from 'react'
import {FaTwitter, FaLinkedinIn, FaGithub, FaSearch} from "react-icons/fa"

const Header = () => {
  return (
    <React.Fragment>
    <div className='container mx-auto'>
    <div className='flex justify-between items-center my-8 mx-5'>
      <Link href={"/"} className="text-3xl font-bold">My Mind Unwrapped</Link>
      <div className='flex items-center space-x-5'>
        <div className='flex items-center space-x-6'>
            <FaGithub className=''/>
            <FaLinkedinIn className=''/>
            <FaTwitter className=''/>
        </div>
        <form className='flex items-center space-x-2'>
          <input type={"text"} placeholder={"Search..."} className="w-[75%] px-4 py-2 rounded-full drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-black"/>
          <button className='bg-black py-4 px-5 rounded-full'>
              <FaSearch className='text-white text-sm'/>
          </button>
        </form>
      </div>
    </div>
    </div>
    <div className=''>
    <div className='container mx-auto flex items-center space-x-12 px-5 py-5'>
      <Link href={"/"} className="uppercase font-normal text-sm">HOME</Link>
      <Link href={"/"} className="uppercase font-normal text-sm">CATEGORIES</Link>
      <Link href={"/"} className="uppercase font-normal text-sm">POLITICS</Link>
      <Link href={"/"} className="uppercase font-normal text-sm">BUSINESS</Link>
      <Link href={"/"} className="uppercase font-normal text-sm">HEALTH</Link>
      <Link href={"/"} className="uppercase font-normal text-sm">DESIGN</Link>
      <Link href={"/"} className="uppercase font-normal text-sm">SPORTS</Link>
      <Link href={"/"} className="uppercase font-normal text-sm">CONTACTS</Link>
    </div>
    <div className='bg-gray-200 h-[1px]'></div>
    </div>
    
    <div>

    </div>
    </React.Fragment>
  )
}

export default Header;