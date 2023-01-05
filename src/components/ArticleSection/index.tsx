import Link from 'next/link'
import React from 'react'
import { FaStar, FaAngleRight } from 'react-icons/fa'

const ArticleSection = () => {
  return (
    <div className='container mx-auto px-10 flex flex-col lg:flex-row space-y-4 lg:space-x-4 pb-[3rem]'>
        <div className='lg:basis-3/4'>
            <h2 className='underline underline-offset-4 text-xl pb-5'>Editor&apos;s Pick</h2>
            <div className='w-full flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
              <div className='md:basis-1/2'>
                <div className='bg-cover bg-center bg-no-repeat h-[174px] w-full mb-8' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/img_h_1.jpg"})`}}>
                </div>
                <div>
                <Link href={"#"} className='text-xl'>News Need to Meet its Audiences Where they are</Link>
              <p className='text-gray-500 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis?</p>
              <div className=''>
              <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
              <div className='flex items-center space-x-1 text-sm text-gray-500'>
              <p className=''>Jun 14 . 3 min read</p>
              <FaStar className='pl-1'/>
              </div>
              </div>
                </div>

              </div>
              <div className='md:basis-1/2 flex flex-col space-y-4 justify-between'>
                <div className='w-full flex flex-row'>
                  <div className='bg-cover bg-center bg-no-repeat basis-2/6' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/img_h_1.jpg"})`}}></div>
                  <div className='bg-gray-50 basis-4/6 py-[10px] px-[20px]'>
                  <Link href={"#"} className=''>News Need to Meet its Audiences Where they are</Link>
                  <div className='text-sm pt-5'>
                    <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
                    <div className='flex items-center space-x-1 text-sm text-gray-500'>
                    <p className=''>Jun 14 . 3 min read</p>
                    <FaStar className='pl-1'/>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='w-full flex flex-row'>
                  <div className='bg-cover bg-center bg-no-repeat basis-2/6' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/img_h_1.jpg"})`}}></div>
                  <div className='bg-gray-50 basis-4/6 py-[10px] px-[20px]'>
                  <Link href={"#"} className=''>News Need to Meet its Audiences Where they are</Link>
                  <div className='text-sm pt-5'>
                    <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
                    <div className='flex items-center space-x-1 text-sm text-gray-500'>
                    <p className=''>Jun 14 . 3 min read</p>
                    <FaStar className='pl-1'/>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='w-full flex flex-row'>
                  <div className='bg-cover bg-center bg-no-repeat basis-2/6' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/img_h_1.jpg"})`}}></div>
                  <div className='bg-gray-50 basis-4/6 py-[10px] px-[20px]'>
                  <Link href={"#"} className=''>News Need to Meet its Audiences Where they are</Link>
                  <div className='text-sm pt-5'>
                    <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
                    <div className='flex items-center space-x-1 text-sm text-gray-500'>
                    <p className=''>Jun 14 . 3 min read</p>
                    <FaStar className='pl-1'/>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className='lg:basis-1/4'>
        <h2 className='underline underline-offset-4 text-xl pb-5'>Trending</h2>
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
  )
}

export default ArticleSection