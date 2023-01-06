import Link from 'next/link'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Categories = ({categories}) => {
  return (
    <React.Fragment>
        <Header/>
        <div className='container mx-auto px-10 py-[3rem] min-h-screen'>
        <h2 className='underline underline-offset-4 text-xl pb-8'>Categories</h2> 
        <div className='grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                categories.map((cat) => (
                    <Link href={cat.path} className="w-full p-5 shadow-lg hover:text-[#8bc34a] transition duration-[600ms]" key={cat.name}>{cat.name}</Link>
                ))
            }
            {/* <Link href={"#"} className="w-full p-5 shadow-lg hover:text-[#8bc34a] transition duration-[600ms]">Politics</Link>
            <Link href={"#"} className="w-full p-5 shadow-lg hover:text-[#8bc34a] transition duration-[600ms]">Politics</Link>
            <Link href={"#"} className="w-full p-5 shadow-lg hover:text-[#8bc34a] transition duration-[600ms]">Politics</Link>
            <Link href={"#"} className="w-full p-5 shadow-lg hover:text-[#8bc34a] transition duration-[600ms]">Politics</Link>
            <Link href={"#"} className="w-full p-5 shadow-lg hover:text-[#8bc34a] transition duration-[600ms]">Politics</Link>
            <Link href={"#"} className="w-full p-5 shadow-lg hover:text-[#8bc34a] transition duration-[600ms]">Politics</Link>
            <Link href={"#"} className="w-full p-5 shadow-lg hover:text-[#8bc34a] transition duration-[600ms]">Politics</Link> */}
        </div>
        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default Categories