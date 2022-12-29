import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FaStar} from "react-icons/fa"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const TopArticle = () => {
  return (
    <div className='container mx-auto px-10 py-[3rem]'>
      <Swiper
        spaceBetween={50}
        pagination={{
          dynamicBullets: true,
          clickable: true,
            renderBullet: function (index, className) {
              console.log(className)
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='w-[20px] h-[20px] bg-red-500 rounded-xl'>
        <div className='max-w-full flex flex-col lg:flex-row'>
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
              <FaStar className='text-sm'/>
              </div>
              </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='max-w-full flex flex-col lg:flex-row'>
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
              <FaStar className='text-sm'/>
              </div>
              </div>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
        
    </div>
  )
}

export default TopArticle