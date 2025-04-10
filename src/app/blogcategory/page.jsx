import React from 'react'
import { FaArrowRight, FaArrowLeft, FaSearch } from "react-icons/fa";






const BlogCategoryPage = () => {
  return (
    <div className='my-20 w-[90%] mx-auto '>

      <div className=' mb-8 border-b border-[#87a186]/100'>
        <div className='text-3xl uppercase hover:underline hover:text-green-900 '>  Tech Blogs
        </div>
        <div className='my-4 text-lg text-justify'>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, sunt eligendi et aliquid illum, quisquam dolor ex veritatis unde velit autem fugit magnam. Natus et laborum dolores, omnis id rem. </p>
        </div>
      </div>

      <div className='flex lg:flex-row  flex-col gap-10 '>

        {/* right section  */}
        <div className='basis-[70%]   '>

          <div className='flex gap-4'>

            <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
              <div className='flex flex-col  gap-4  border border-[#87a186]/100 rounded-sm'>
                <div className=' '>
                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                </div>
                <a href="/single" className='cursor-pointer  '>
                  <div className='p-4 text-justify'>
                    <span className='flex gap-1 text-[#232b22]/50'><p>Tech Blog . </p><p> Mar 13th 25</p></span>
                    <h2 className='text-3xl mb-2 hover:underline hover:text-green-900'> The Rise of Social Media Influencers</h2>

                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, provident commodi. Commodi minima dignissimos, atque consequuntur illum reiciendis accusantium sed culpa veniam mollitia eaque nemo nam ea blanditiis, quis vitae. </p>
                    <div className='flex gap-4 pb-3 mt-3 items-center '>
                  <span className='w-10 h-10 rounded-full'><img src="images/person/person.jpg" alt="" className='w-10 h-10 rounded-full' /></span>
                  <p>Jubeda Parveen </p>
                </div>
                  </div>
                </a>
              </div>
            </div>

            <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
              <div className='flex flex-col  gap-4  border border-[#87a186]/100 rounded-sm'>
                <div className=' '>
                  <img src="images/posts/post-img-8.jpg" alt="" className='' />
                </div>
                <a href="/single" className='cursor-pointer  '>
                  <div className='p-4 text-justify'>
                    <span className='flex gap-1 text-[#232b22]/50'><p>Tech Blog . </p><p> Mar 13th 25</p></span>
                    <h2 className='text-3xl mb-2 hover:underline hover:text-green-900'> The Rise of Social Media Influencers</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, provident commodi. Commodi minima dignissimos, atque consequuntur illum reiciendis accusantium sed culpa veniam mollitia eaque nemo nam ea blanditiis, quis vitae. </p>
                    <div className='flex gap-4 pb-3 mt-3 items-center'>
                      <span className='w-10 h-10 rounded-full'><img src="images/person/person.jpg" alt="" className='w-10 h-10 rounded-full' /></span>
                      <p>Jubeda Parveen </p>
                    </div>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* pagination section  */}
          <div className='flex flex-row justify-center items-center gap-4 text-white '>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100 font-extrabold hover:bg-[#87a186] hover:text-[#0E2A10]' >< FaArrowRight /></button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100' >1</button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100' >2</button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100' >3</button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100' >4</button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100' >5</button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100' >6</button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100' >7</button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100' >8</button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100' >9</button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100' >10</button>
            <button className='w-8 h-8 bg-[#0E2A10] text-[#87a186] flex flex-row justify-center items-center  rounded-full border border-[#87a186]/100 font-extrabold hover:bg-[#87a186] hover:text-[#0E2A10]' ><FaArrowLeft /></button>
          </div>

        </div>
        {/* lrft section  */}
        <div className='basis-[30%] '>
          <div className='shadow-[1px_1px_10px_5px_rgba(0,0,0,0.25)] px-4 py-10 mb-8 bg-[#87a186] text-green-950'>
            <div className='text-xl tracking-widest border-l-4 pl-2 border-green-950 font-semibold'>Search</div>
            <div className='flex justify-between mt-4 bg-[#96ae95] rounded-full px-3 py-2 gap-4 border '>
              <input type="text" className='w-[80%] outline-0' name='search' placeholder='Search.... ' />
              <FaSearch className='mt-1 text-[#87a186] ' />
            </div>
          </div>

          <div className='shadow-[1px_1px_10px_5px_rgba(0,0,0,0.25)] px-4 py-10 mb-8 bg-[#87a186] text-green-950'>
            <div className='text-xl tracking-widest border-l-4 pl-2 border-green-950 font-semibold'>Blogs Catogries </div>
            <div className=' mt-4 '>
              <div className='bg-[#96ae95] p-2 flex flex-col gap-2 text-lg'>
                <span> Tech Blogs  </span>
                <span> Soon Adding More .. </span>
              </div>
            </div>
          </div>

          <div className='shadow-[1px_1px_10px_5px_rgba(0,0,0,0.25)] px-4 py-10 mb-8 bg-[#87a186] text-green-950 '>
            <div className='text-xl tracking-widest border-l-4 pl-2 border-green-950 font-semibold'>Recent Posts</div>
            <div className=' mt-4 bg-[#96ae95] p-2 gap-4 '>

              <div className='border-b-2 pb-3 mb-3 border-[#a5bfa4]'>
                <div className='flex flex-col md:flex-row  gap-2   '>
                  <div className='w-28 h-auto '>
                    <img src="images/posts/post-img-8.jpg" alt="" className='w-28 h-full' />
                  </div>
                  <a href="/single" className='cursor-pointer  '>
                    <div className='px-2 py-1 text-justify'>
                      <h2 className='text-lg  hover:underline hover:text-green-900'> The Rise of Social Media Influencers</h2>
                      <p className='text-[#586c58]'>Mar 15th 2025</p>

                    </div>
                  </a>
                </div>
              </div>

              <div className='border-b-2 pb-3 mb-3 border-[#a5bfa4]'>
                <div className='flex flex-col md:flex-row  gap-2   '>
                  <div className='w-28 h-auto '>
                    <img src="images/posts/post-img-5.jpg" alt="" className='w-28 h-full' />
                  </div>
                  <a href="/single" className='cursor-pointer  '>
                    <div className='px-2 py-1 text-justify'>
                      <h2 className='text-lg  hover:underline hover:text-green-900'> The Rise of Social Media Influencers</h2>
                      <p className='text-[#586c58]'>Mar 15th 2025</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className='border-b-2 pb-3 mb-3 border-[#a5bfa4]'>
                <div className='flex flex-col md:flex-row  gap-2   '>
                  <div className='w-28 h-auto '>
                    <img src="images/posts/post-img-6.jpg" alt="" className='w-28 h-full' />
                  </div>
                  <a href="/single" className='cursor-pointer  '>
                    <div className='px-2 py-1 text-justify'>
                      <h2 className='text-lg  hover:underline hover:text-green-900'> The Rise of Social Media Influencers</h2>
                      <p className='text-[#586c58]'>Mar 15th 2025</p>

                    </div>
                  </a>
                </div>
              </div>

              <div className='border-b-2 pb-3 mb-3 border-[#a5bfa4]'>
                <div className='flex flex-col md:flex-row  gap-2   '>
                  <div className='w-28 h-auto '>
                    <img src="images/posts/post-img-7.jpg" alt="" className='w-28 h-full' />
                  </div>
                  <a href="/single" className='cursor-pointer  '>
                    <div className='px-2 py-1 text-justify'>
                      <h2 className='text-lg  hover:underline hover:text-green-900'> The Rise of Social Media Influencers</h2>
                      <p className='text-[#586c58]'>Mar 15th 2025</p>

                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>


          <div className='shadow-[1px_1px_10px_5px_rgba(0,0,0,0.25)] px-4 py-10 mb-8 bg-[#87a186] text-green-950 '>
            <div className='text-xl tracking-widest border-l-4 pl-2 border-green-950 font-semibold'>Tags</div>
            <div className=' text-xl mt-4 '>
              <span className='bg-[#96ae95] rounded-full px-3  border '>It</span>
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default BlogCategoryPage