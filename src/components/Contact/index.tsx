import React from 'react'
import Header from '../Header'

const Contact = () => {
  return (
    <React.Fragment>
        <Header/>
        <div className='bg-[#f8f9fa]'>
        <div className='container mx-auto px-10 py-[3rem]'>
        <h2 className='underline underline-offset-4 text-xl pb-8'>Contact Us</h2> 
        <form className='w-full'>
            <div className='flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8'>
                <div className='lg:basis-1/2'>
                    <label className='mb-6 flex flex-col space-y-3'>
                        <span className='text-gray-500'>First Name</span>
                        <input type={"text"} className="w-full px-4 py-3 rounded-full drop-shadow-lg focus:outline-none"/>
                    </label>
                    <label className='mb-6 flex flex-col space-y-3'>
                        <span className='text-gray-500'>Email</span>
                        <input type={"email"} className="w-full px-4 py-3 rounded-full drop-shadow-lg focus:outline-none"/>
                    </label>
                </div>
                <div className='lg:basis-1/2'>
                    <label className='mb-6 flex flex-col space-y-3'>
                        <span className='text-gray-500'>Last Name</span>
                        <input type={"text"} className="w-full px-4 py-3 rounded-full drop-shadow-lg focus:outline-none"/>
                    </label>
                    <label className='mb-6 flex flex-col space-y-3'>
                        <span className='text-gray-500'>Tel. Number</span>
                        <input type={"text"} className="w-full px-4 py-3 rounded-full drop-shadow-lg focus:outline-none"/>
                    </label>
                </div>
            </div>
            <label className='mb-6 flex flex-col space-y-3'>
                <span className='text-gray-500'>Message</span>
                <textarea cols={30} rows={10} className="drop-shadow-lg focus:outline-none px-4 py-3 rounded-3xl"/>
            </label>
            <button className='bg-black text-white hover:bg-[#8bc34a] transition duration-[600ms] py-4 px-10 rounded-full uppercase'>
                Send Message
          </button>    
        </form>
        </div>
        <div className='bg-white'>
            <div className='container mx-auto px-10 py-[3rem]'>
            <p className='text-gray-500 text-center pb-10'>Copyright ©2023 | <span className='text-[#8bc34a]'>Gabin Ishimwe</span></p>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Contact