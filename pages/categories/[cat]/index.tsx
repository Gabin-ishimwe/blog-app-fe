import Link from 'next/link'
import React from 'react'
import { FaStar, FaAngleRight } from 'react-icons/fa'
import Footer from '../../../src/components/Footer'
import Header from '../../../src/components/Header'

const urls = [
    "politics",
    "health",
    "business",
    "design",
    "sports"
]

const OneCategory = ({title}) => {
  return (
    <React.Fragment>
        <Header/>
        <div className='container mx-auto my-10 px-10 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8'>
    <div className='lg:basis-3/4'>
        <p className='font-[100] uppercase text-xs'>Categories</p>
    <h2 className='underline underline-offset-4 text-xl pb-8'>{title}</h2> 
<div className='w-full flex flex-row mb-6'>
    <div className='bg-gray-50 basis-3/4 py-[10px] px-[20px]'>
    <Link href={"/categories/politics/1"} className='sm:text-lg'>News Need to Meet its Audiences Where they are</Link>
    <p className='text-gray-500 pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
    <div className='text-sm pt-5'>
    <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
    <div className='flex items-center space-x-1 text-sm text-gray-500'>
    <p className=''>Jun 14 . 3 min read</p>
    <FaStar className='pl-1'/>
    </div>
    </div>
    </div>
    <div className='bg-cover bg-center bg-no-repeat basis-1/4' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/img_h_1.jpg"})`}}></div>
    </div>
    <div className='w-full flex flex-row mb-6'>
    <div className='bg-gray-50 basis-3/4 py-[10px] px-[20px]'>
    <Link href={"#"} className='sm:text-lg'>News Need to Meet its Audiences Where they are</Link>
    <p className='text-gray-500 pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
    <div className='text-sm pt-5'>
    <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
    <div className='flex items-center space-x-1 text-sm text-gray-500'>
    <p className=''>Jun 14 . 3 min read</p>
    <FaStar className='pl-1'/>
    </div>
    </div>
    </div>
    <div className='bg-cover bg-center bg-no-repeat basis-1/4' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/img_v_2.jpg"})`}}></div>
    </div>
    <div className='w-full flex flex-row mb-6'>
    <div className='bg-gray-50 basis-3/4 py-[10px] px-[20px]'>
    <Link href={"#"} className='sm:text-lg'>News Need to Meet its Audiences Where they are</Link>
    <p className='text-gray-500 pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
    <div className='text-sm pt-5'>
    <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
    <div className='flex items-center space-x-1 text-sm text-gray-500'>
    <p className=''>Jun 14 . 3 min read</p>
    <FaStar className='pl-1'/>
    </div>
    </div>
    </div>
    <div className='bg-cover bg-center bg-no-repeat basis-1/4' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/big_img_1.jpg.webp"})`}}></div>
    </div>
    <div className='flex flex-row space-x-4 mb-6 ml-4'>
        <button className='text-gray-500 hover:text-black transition duration-[600ms]'>1</button>
        <button className='text-gray-500 hover:text-black transition duration-[600ms]'>2</button>
        <button className='text-gray-500 hover:text-black transition duration-[600ms]'>3</button>
        <button className='text-gray-500 hover:text-black transition duration-[600ms]'>4</button>
    </div>
    </div>
    <div className='lg:basis-1/4'>
        <h2 className='underline underline-offset-4 text-xl pb-8'>Trending</h2>
        <div className='w-full flex flex-col space-y-4'>
          <div className='w-full flex flex-row space-x-5'>
            <div className=''>
              <p className='text-3xl text-gray-500'>01</p>
            </div>
            <div className=''>
                    <Link href={"#"} className='text-lg'>News Need to Meet its Audiences Where they are</Link>
                    <div className='text-sm pt-2'>
                      <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
                      <div className='flex items-center space-x-1 text-sm text-gray-500'>
                      <p className=''>Jun 14 . 3 min read</p>
                      <FaStar className='pl-1'/>
                      </div>
                    </div>
                    </div>
          </div>
          <div className='w-full flex flex-row space-x-5'>
            <div className=''>
              <p className='text-3xl text-gray-500'>02</p>
            </div>
            <div className=''>
                    <Link href={"#"} className='text-lg'>News Need to Meet its Audiences Where they are</Link>
                    <div className='text-sm pt-2'>
                      <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
                      <div className='flex items-center space-x-1 text-sm text-gray-500'>
                      <p className=''>Jun 14 . 3 min read</p>
                      <FaStar className='pl-1'/>
                      </div>
                    </div>
                    </div>
          </div>
          <div className='w-full flex flex-row space-x-5'>
            <div className=''>
              <p className='text-3xl text-gray-500'>03</p>
            </div>
            <div className=''>
                    <Link href={"#"} className='text-lg'>News Need to Meet its Audiences Where they are</Link>
                    <div className='text-sm pt-2'>
                      <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
                      <div className='flex items-center space-x-1 text-sm text-gray-500'>
                      <p className=''>Jun 14 . 3 min read</p>
                      <FaStar className='pl-1'/>
                      </div>
                    </div>
                    </div>
          </div>
          <div className='w-full flex flex-row space-x-5'>
            <div className=''>
              <p className='text-3xl text-gray-500'>04</p>
            </div>
            <div className=''>
                    <Link href={"#"} className='text-lg'>News Need to Meet its Audiences Where they are</Link>
                    <div className='text-sm pt-2'>
                      <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
                      <div className='flex items-center space-x-1 text-sm text-gray-500'>
                      <p className=''>Jun 14 . 3 min read</p>
                      <FaStar className='pl-1'/>
                      </div>
                    </div>
                    </div>
          </div>
        </div>
        <div className='flex items-center space-x-2 mt-8'>
          <Link href={"#"} className='text-[#8bc34a]'>SEE ALL TRENDS</Link>
          <FaAngleRight className='text-[#8bc34a]'/>
          </div>
        </div>
    </div>
        <Footer/>
    </React.Fragment>
  )
}

export default OneCategory;

export function getStaticPaths() {
    const allPaths = urls.map(url => (
        {
            params: {
                cat: url
            }
        }
    ))
    return {
        paths: [...allPaths],
        fallback: false
    }
}

export function getStaticProps(context) {
    const id = context.params.cat;
    const data = urls.find((cat) => cat == id);
    return {
        props: {
            title: data?.toUpperCase()
        }
    }
}