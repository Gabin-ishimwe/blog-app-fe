import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const MiddleSection = () => {
  return (
    <div className='container mx-auto flex flex-col lg:flex-row px-10 pb-[3rem]'>
    <div className='h-[300px] lg:h-[400px] lg:basis-1/2 bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/big_img_1.jpg.webp"})`}}>
    </div>
      <div className='lg:basis-1/2 bg-gray-50 p-12'>
        <p className='uppercase text-gray-500'>Editor&apos;s Pick</p>
        <Link href={"#"} className='text-3xl'>News Need to Meet its Audiences Where they are</Link>
        <p className='text-gray-500 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
        <div className=''>
        <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
        <div className='flex items-center space-x-1 text-sm text-gray-500'>
        <p className=''>Jun 14 . 3 min read</p>
        <FaStar className='pl-1'/>
        </div>
        </div>
      </div>
  </div>
  )
}

export default MiddleSection