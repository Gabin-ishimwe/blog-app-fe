import Image from 'next/image'
import React from 'react'
import {FaStar} from "react-icons/fa"

const TopArticle = () => {
  return (
    <div className='container mx-auto px-5'>
        <div className='max-w-full flex flex-row'>
            <Image src={"https://preview.colorlib.com/theme/meranda/images/big_img_1.jpg.webp"} alt="person cooking" className='w-full basis-1/2' width={500} height={500}/>
            <div className='basis-1/2 bg-gray-50'>
              <p className='uppercase text-gray-500'>Editor&apos;s Pick</p>
              <p className='text-3xl'>News Need to Meet its Audiences Where they are</p>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
              <div className=''>
              <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
              <div className='flex items-center space-x-1'>
              <p className=''>Jun 14 . 3 min read</p>
              <FaStar className='text-sm'/>

              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default TopArticle