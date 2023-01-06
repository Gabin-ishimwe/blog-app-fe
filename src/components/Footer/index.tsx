import React from 'react'
import { FaSearch, FaPaperPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-50 max-w-full'>
        <div className='container mx-auto px-10'>
            <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 py-20'>
                <div className='lg:basis-1/2'>
                    <h2 className='text-lg'>NewsLetter Subscribe</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
                </div>
                <form className='lg:basis-1/2 flex items-center space-x-2'>
          <input type={"email"} placeholder={"Enter your Email..."} className="w-[75%] px-4 py-2 rounded-full drop-shadow-lg focus:outline-none"/>
          <button className='bg-black hover:bg-[#8bc34a] transition duration-[600ms] py-4 px-5 rounded-full'>
              <FaPaperPlane className='text-white text-sm'/>
          </button>
        </form>
            </div>
            {/* <div className='mx-auto mb-5'> */}
                <p className='text-gray-500 text-center pb-10'>Copyright ©2023 | <span className='text-[#8bc34a]'>Gabin Ishimwe</span></p>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Footer