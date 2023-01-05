import Link from 'next/link';
import React from 'react'
import {FaTwitter, FaLinkedinIn, FaGithub, FaSearch, FaTimes} from "react-icons/fa"
import {MdMenu} from "react-icons/md"

const Header = () => {
  const links = [
    {
      link: "home",
      path: "/home"
    },
    {
      link: "categories",
      path: "/home"
    },
    {
      link: "politics",
      path: "/home"
    },
    {
      link: "business",
      path: "/home"
    },
    {
      link: "health",
      path: "/home"
    },
    {
      link: "design",
      path: "/home"
    },
    {
      link: "sports",
      path: "/home"
    },
    {
      link: "contact",
      path: "/home"
    },
  ]
  const [active, setActive] = React.useState(false);
  const showMenu = () => {
    setActive(true)
  }
  const closeMenu = () => {
    setActive(false)
  }
  return (
    <React.Fragment>
    <div className='container mx-auto flex lg:block justify-between items-start relative'>
    <div className='flex space-y-4 lg:space-y-0 flex-col lg:flex-row lg:justify-between lg:items-center my-8 mx-10'>
      <Link href={"/"} className="text-2xl sm:text-3xl font-bold hover:text-[#8bc34a] transition duration-[600ms]">My Mind Unwrapped</Link>
      <div className='flex flex-col sm:flex-row sm:items-center space-y-5 sm:space-y-0 sm:space-x-5'>
        <div className='flex items-center space-x-6'>
            <FaGithub className=''/>
            <FaLinkedinIn className=''/>
            <FaTwitter className=''/>
        </div>
        <form className='flex items-center space-x-2'>
          <input type={"text"} placeholder={"Search..."} className="w-[75%] px-4 py-2 rounded-full drop-shadow-lg focus:outline-none"/>
          <button className='bg-black hover:bg-[#8bc34a] transition duration-[600ms] py-4 px-5 rounded-full'>
              <FaSearch className='text-white text-sm'/>
          </button>
        </form>
      </div>
    </div>
    <button className='lg:hidden mx-5 my-8 text-3xl' onClick={showMenu}>
      <MdMenu/>
    </button>
    {
      active && (
    <nav className='fixed inset-0 left-1/2 flex flex-col space-y-5 items-center pt-10 bg-white shadow-2xl'>
      <button className='lg:hidden'>
        <FaTimes className='text-3xl' onClick={closeMenu}/>
      </button>
    {/* <div className='flex lg:hidden flex-col space-y-5 w-1/2'> */}
      {links.map((link) => (
        <Link href={link.path} key={link.link} className="capitalize font-normal text-xl hover:text-[#8bc34a] transition duration-[600ms]">{link.link}</Link>
      ))}
    {/* </div> */}
    </nav>
      )
    }
    </div>
    <div className='hidden lg:block sticky top-0'>
      <div className='container mx-auto flex items-center space-x-12 px-10 py-5'>
        {
          links.map((link) => (
            <Link href={link.path} key={link.link} className="uppercase font-normal text-sm hover:text-[#8bc34a] transition duration-[500ms]">{link.link}</Link>

          ))
        }
      </div>
      <div className='bg-gray-200 h-[1px]'></div>
    </div>
    </React.Fragment>
  )
}

export default Header;