import Link from 'next/link'
import React from 'react'
import { FaStar, FaAngleRight } from 'react-icons/fa'
import Footer from '../Footer'
import Header from '../Header'

const SinglePage = ({category}) => {
  return (
    <React.Fragment>
        <Header/>
        <div className='container mx-auto px-10 py-[3rem] flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8'>
            <div className='lg:basis-3/4'>
                    <div className='h-[350px] lg:basis-1/2 bg-cover bg-center bg-no-repeat mb-6' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/big_img_1.jpg.webp"})`}}>
                </div>
                <h2 className='text-3xl mb-6'>News Needs to Meet Its Audiences Where They Are</h2>
                <div className='flex flex-row items-center space-x-4 mb-6'>
                    <div className='bg-cover bg-center bg-no-repeat w-[50px] h-[50px] rounded-full' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/person_1.jpg.webp"})`}}/>
                <div className=''>
                    <p>Dave Rogers <span className='text-gray-500'>in</span> Food</p>
                    <div className='flex items-center space-x-1 text-sm text-gray-500'>
                    <p className=''>Jun 14 . 3 min read</p>
                    <FaStar className='pl-1'/>
                    </div>
                    </div>
                </div>
                <div className='my-8 text-gray-500'>
                    <p className='pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta maiores, eos culpa.</p>
                    <p className='pb-5'>Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel unde magni.</p>
                    <p className='pb-5'>Nulla nesciunt eligendi ratione, atque, hic, ullam suscipit quos enim vitae fugiat ducimus, dolore delectus iste id culpa. Ducimus, iste magnam sed reprehenderit architecto perferendis odio voluptas molestiae quidem ab numquam debitis, dolorem incidunt, tempore a quod qui nobis. Voluptates!</p>
                    <p className='pb-5'>Blanditiis, ipsum sed odio reprehenderit sequi ut vitae, dolor minima ab! Architecto nesciunt nemo sint est aspernatur fugit consequatur, magnam suscipit asperiores illo eum repellendus officia dolorem, molestiae commodi nam voluptatem quis quia vel cumque quos, aliquam ex incidunt sapiente!</p>
                    <p className='pb-5'>Suscipit, officiis, vero! Perferendis accusamus quos voluptatum culpa, provident maiores! Illo itaque ullam fugit molestiae, eaque accusamus impedit autem numquam. Placeat molestias tempore eaque ipsam vel voluptatum velit enim quam iusto maxime delectus, sint sapiente ea, quo excepturi nisi! Quia.</p>
                </div>
                <p className='text-gray-500'>Categories: <span className='text-[#8bc34a]'>{category}</span> Tags: <span className='text-[#8bc34a]'>#cooking, #recipe</span></p>

                <div className='my-8'>
                <h2 className='underline underline-offset-4 text-xl pb-8'>3 Comments</h2>
                <div className='flex flex-row space-x-4 mb-6'>
                    <div className='bg-cover bg-center bg-no-repeat min-w-[50px] h-[50px] rounded-full' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/person_1.jpg.webp"})`}}/>
                    <div className=''>
                        <p className='text-lg mb-2'>Dave Rogers</p>
                        <p className='text-[#cccc]'>JANUARY 9, 2018 AT 2:21PM</p>
                        <p className='text-gray-500 mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, nihil?</p>
                        <button className='px-5 py-2 bg-[#cccc] text-black mb-2'>REPLY</button>
                    </div>
                </div>
                <div className='flex flex-row space-x-4 mb-6'>
                    <div className='bg-cover bg-center bg-no-repeat min-w-[50px] h-[50px] rounded-full' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/person_1.jpg.webp"})`}}/>
                    <div className=''>
                        <p className='text-lg mb-2'>Dave Rogers</p>
                        <p className='text-[#cccc]'>JANUARY 9, 2018 AT 2:21PM</p>
                        <p className='text-gray-500 mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, nihil?</p>
                        <button className='px-5 py-2 bg-[#cccc] text-black mb-2'>REPLY</button>
                    </div>
                </div>
                <div className='flex flex-row space-x-4 mb-6'>
                    <div className='bg-cover bg-center bg-no-repeat min-w-[50px] h-[50px] rounded-full' style={{backgroundImage: `url(${"https://preview.colorlib.com/theme/meranda/images/person_1.jpg.webp"})`}}/>
                    <div className=''>
                        <p className='text-lg mb-2'>Dave Rogers</p>
                        <p className='text-[#cccc]'>JANUARY 9, 2018 AT 2:21PM</p>
                        <p className='text-gray-500 mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, nihil?</p>
                        <button className='px-5 py-2 bg-[#cccc] text-black mb-2'>REPLY</button>
                    </div>
                </div>
                </div>
                <div className=''>
                <h2 className='underline underline-offset-4 text-xl pb-8'>Leave Comment</h2>
                <form className='bg-[#f8f9fa] py-8 px-8 my-8'>
                    <label className='mb-6 flex flex-col space-y-3'>
                        <span className='text-gray-500'>First Name*</span>
                        <input type={"text"} className="w-full px-4 py-3 rounded-full drop-shadow-lg focus:outline-none"/>
                    </label>
                    <label className='mb-6 flex flex-col space-y-3'>
                        <span className='text-gray-500'>Last Name*</span>
                        <input type={"text"} className="w-full px-4 py-3 rounded-full drop-shadow-lg focus:outline-none"/>
                    </label>
                    <label className='mb-6 flex flex-col space-y-3'>
                        <span className='text-gray-500'>Email*</span>
                        <input type={"email"} className="w-full px-4 py-3 rounded-full drop-shadow-lg focus:outline-none"/>
                    </label>
                    <label className='mb-6 flex flex-col space-y-3'>
                        <span className='text-gray-500'>Message</span>
                        <textarea cols={30} rows={10} className="drop-shadow-lg focus:outline-none px-4 py-3 rounded-3xl"/>
                    </label>
                    <button className='bg-black text-white hover:bg-[#8bc34a] transition duration-[600ms] py-4 px-10 rounded-full uppercase'>
                            Post Comment
                    </button>   
                </form>
                </div>
            </div>
            <div className='lg:basis-1/4'>
        <h2 className='underline underline-offset-4 text-xl pb-8'>Popular Posts</h2>
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
          <Link href={"#"} className='text-[#8bc34a]'>SEE ALL POPULAR POSTS</Link>
          <FaAngleRight className='text-[#8bc34a]'/>
          </div>
            </div>
        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default SinglePage