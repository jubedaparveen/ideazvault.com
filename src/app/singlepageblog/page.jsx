import Link from 'next/link'
import React from 'react'

import { CiUser } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";




const BlogSinglePage = () => {
     return (
          <div className=' text-[#0E2A10]'>
               <div className=' md:px-0 max-w-7xl mx-auto py-20'>
                    <div className=''>
                         <h2 className='text-2xl font-bold'>Blog Title</h2>
                         <p className='text-sm text-gray-500'>Author Name | Date</p>
                    </div>
                    <div className='flex lg:flex-row  flex-col gap-10 '>
                         {/* Right Col  */}
                         <div className='lg:w-3/4 w-full'>
                              <div className='text-justify py-10'>
                                   <img src="/images/banner/banner1-1.jpg" alt="Blog Image" className='w-full h-auto' />
                                   <h3 className='text-2xl font-bold mt-4 hover:underline hover:text-green-900 '>Blogs Related to Ayurveda Medicines</h3>
                                   <p></p>
                                   <div className='flex gap-4 mt-4 text-gray-500'>
                                        <span className='flex gap-1'><CiUser className='mt-1' /> <p> Auther Name </p> </span>
                                        <span className='flex gap-1'><MdAccessTime className='mt-1' /> <p> 25 Mar 2025 </p> </span>
                                        <span className='flex gap-1'>< AiOutlineComment className='mt-1' /> <p> Comments </p> </span>
                                   </div>
                                   <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione facere ducimus, possimus accusantium amet expedita, cumque, incidunt facilis sit cum iste aliquam aliquid dolores alias? Similique rem libero fugiat?
                                   </p>
                                   <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione facere ducimus, possimus accusantium amet expedita, cumque, incidunt facilis sit cum iste aliquam aliquid dolores alias? Similique rem libero fugiat?
                                   </p>
                              </div>
                              <div className=' mb-10 border-l-5 border-[#0E2A10] py-3 text-lg  text-center '>
                                   <div className='bg-[#87a186]/20 px-20 py-10 rounded-br-full '>
                                        <p>
                                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione facere ducimus, possimus accusantium amet expedita, cumque,
                                        </p>
                                   </div>
                              </div>
                              <div className='mb-4'>
                                   <h3 className='text-xl font-bold '> Topic Sub Title </h3>
                                   <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione facere ducimus, possimus accusantium amet expedita, cumque, incidunt facilis sit cum iste aliquam aliquid dolores alias? Similique rem libero fugiat?
                                   </p>
                                   <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione facere ducimus, possimus accusantium amet expedita, cumque, incidunt facilis sit cum iste aliquam aliquid dolores alias? Similique rem libero fugiat?
                                   </p>
                              </div>
                              <div className='my-6'>
                                   <h3 className='text-xl font-bold '> Topic Sub Title </h3>
                                   <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione facere ducimus, possimus accusantium amet expedita, cumque, incidunt facilis sit cum iste aliquam aliquid dolores alias? Similique rem libero fugiat?
                                   </p>
                                   <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione facere ducimus, possimus accusantium amet expedita, cumque, incidunt facilis sit cum iste aliquam aliquid dolores alias? Similique rem libero fugiat?
                                   </p>
                              </div>
                              <div className='my-20  '>
                                   <h3 className='text-3xl font-bold'> <span className='me-3'>3</span>Comments</h3>

                                   <div className='flex gap-4 mt-4'>
                                        <div className='w-40 h-40 rounded-full overflow-hidden'>
                                             <img src="images/personal/im4.png " alt="" />
                                        </div>
                                        <div className='w-full text-justify mt-10'>
                                             <h3 className='text-lg font-bold'>Commenter Name</h3>
                                             <p className='text-gray-300'> 25 mar 2025 </p>
                                             <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.

                                             </p>
                                        </div>

                                   </div>

                                   <div className='flex gap-4 mt-4'>
                                        <div className='w-40 h-40 rounded-full overflow-hidden'>
                                             <img src="images/personal/im4.png " alt="" />
                                        </div>
                                        <div className='w-full text-justify mt-10'>
                                             <h3 className='text-lg font-bold'>Commenter Name</h3>
                                             <p className='text-gray-300'> 25 mar 2025 </p>
                                             <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.
                                             </p>
                                             <div className='flex gap-4 mt-4'>
                                                  <div className='w-40 h-40 rounded-full overflow-hidden'>
                                                       <img src="images/personal/im4.png " alt="" />
                                                  </div>
                                                  <div className='w-full text-justify mt-10'>
                                                       <h3 className='text-lg font-bold'>Commenter Name</h3>
                                                       <p className='text-gray-300'> 25 mar 2025 </p>
                                                       <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className='flex gap-4 mt-4'>
                                                  <div className='w-40 h-40 rounded-full overflow-hidden'>
                                                       <img src="images/personal/im4.png " alt="" />
                                                  </div>
                                                  <div className='w-full text-justify mt-10'>
                                                       <h3 className='text-lg font-bold'>Commenter Name</h3>
                                                       <p className='text-gray-300'> 25 mar 2025 </p>
                                                       <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <div className='flex gap-4 mt-4'>
                                        <div className='w-40 h-40 rounded-full overflow-hidden'>
                                             <img src="images/personal/im4.png " alt="" />
                                        </div>
                                        <div className='w-full text-justify mt-10'>
                                             <h3 className='text-lg font-bold'>Commenter Name</h3>
                                             <p className='text-gray-300'> 25 mar 2025 </p>
                                             <p className='text-sm text-[#0E2A10]/50 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat euismod, facilisis ligula nec, facilisis nunc. Sed nec nisi a augue bibendum dictum.
                                             </p>
                                        </div>
                                   </div>
                              </div>

                              {/* comment share */}
                              <div className='mt-6 mb-4 border border-[#0E2A10]/20 p-4 shadow-[1px_1px_10px_1px_rgba(0,0,0,0.25)]'>
                                   <h2 className='text-2xl font-bold'>Leave a Comment</h2>
                                   <p className='text-gray-300 mt-2'>Your email address will not be published. Required fields are marked *</p>
                                   <form className='mt-4'>
                                        <div className='flex gap-4'>
                                             <input type="text" className='w-full border border-gray-300 rounded p-2' placeholder='Your Name' />
                                             <input type="email" className='w-full border border-gray-300 rounded p-2 ' placeholder='Your Email' />
                                        </div>

                                        <input type="text" className='w-full border border-gray-300 rounded p-2 mt-2' placeholder='Your Website' />

                                        <textarea className='w-full border border-gray-300 rounded p-2' rows="5" placeholder='Your Comment'></textarea>
                                        <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded mt-2'>Submit</button>
                                   </form>
                              </div>
                              {/* social share */}
                              <div className='mt-10'>
                                   <h2 className='text-2xl font-bold'>Share this Post</h2>
                                   <div className='flex gap-4 mt-4'>
                                        <Link href="#" className='bg-blue-500 text-white px-4 py-2 rounded'>Facebook</Link>
                                        <Link href="#" className='bg-blue-400 text-white px-4 py-2 rounded'>Twitter</Link>
                                        <Link href="#" className='bg-red-500 text-white px-4 py-2 rounded'>Instagram</Link>
                                        <Link href="#" className='bg-green-500 text-white px-4 py-2 rounded'>LinkedIn</Link>
                                   </div>
                              </div>

                         </div>
                         {/* Left col  */}
                         <div className='lg:w-2/4 w-full'>
                               <div className='border px-4 py-10 my-8 bg-white/60 text-green-950'>
                                   <div className='text-xl tracking-widest border-l-4 pl-2 py-2 border-green-950 font-semibold'>Search</div>
                                        <div className='flex justify-between mt-4 bg-[#96ae95]/30 rounded-full px-3 py-2 gap-4 border '>
                                        <input type="text" className='w-[80%] outline-0' name='search' placeholder='Search.... ' />
                                              <FaSearch className='mt-1 text-[#87a186] ' />
                                        </div>
                                   </div>
                              <div className='border px-4 py-10 mb-8 bg-white/60 text-green-950 '>
                                   <div className='text-xl tracking-widest border-l-4 pl-2 py-3 border-green-950 font-semibold'>Recent Posts</div>
                                   <div className=' mt-4 bg-[#96ae95]/20 rounded-sm py-3 px-2 gap-4 '>
                                        <div className='border-b-2 pb-3 mb-3 border-[#a5bfa4]'>
                                             <div className='flex flex-col md:flex-row  gap-2   '>
                                                  <div className='w-28 h-auto '>
                                                       <img src="images/posts/post-img-8.jpg" alt="" className='w-28 h-full' />
                                                  </div>
                                                  <a href="/singlepageblog" className='cursor-pointer  '>
                                                       <div className='px-2 py-1 text-justify'>
                                                            <h2 className='text-lg  hover:underline hover:text-green-900'> Blogs Related to Ayurveda Medicines</h2>
                                                            <p className='text-[#586c58]'>Mar 21th 2025</p>

                                                       </div>
                                                  </a>
                                             </div>
                                        </div>

                                        <div className='border-b-2 pb-3 mb-3 border-[#a5bfa4]'>
                                             <div className='flex flex-col md:flex-row  gap-2   '>
                                                  <div className='w-28 h-auto '>
                                                       <img src="images/posts/post-img-5.jpg" alt="" className='w-28 h-full' />
                                                  </div>
                                                  <a href="/singlepageblog" className='cursor-pointer  '>
                                                       <div className='px-2 py-1 text-justify'>
                                                            <h2 className='text-lg  hover:underline hover:text-green-900'> Blogs Related to Ayurveda Medicines</h2>
                                                            <p className='text-[#586c58]'>Mar 21th 2025</p>
                                                       </div>
                                                  </a>
                                             </div>
                                        </div>

                                        <div className='border-b-2 pb-3 mb-3 border-[#a5bfa4]'>
                                             <div className='flex flex-col md:flex-row  gap-2   '>
                                                  <div className='w-28 h-auto '>
                                                       <img src="images/posts/post-img-6.jpg" alt="" className='w-28 h-full' />
                                                  </div>
                                                  <a href="/singlepageblog" className='cursor-pointer  '>
                                                       <div className='px-2 py-1 text-justify'>
                                                            <h2 className='text-lg  hover:underline hover:text-green-900'> Blogs Related to Ayurveda Medicines</h2>
                                                            <p className='text-[#586c58]'>Mar 21th 2025</p>

                                                       </div>
                                                  </a>
                                             </div>
                                        </div>

                                        <div className='border-b-2 pb-3 mb-3 border-[#a5bfa4]'>
                                             <div className='flex flex-col md:flex-row  gap-2   '>
                                                  <div className='w-28 h-auto '>
                                                       <img src="images/posts/post-img-7.jpg" alt="" className='w-28 h-full' />
                                                  </div>
                                                  <a href="/singlepageblog" className='cursor-pointer  '>
                                                       <div className='px-2 py-1 text-justify'>
                                                            <h2 className='text-lg  hover:underline hover:text-green-900'> Blogs Related to Ayurveda Medicines</h2>
                                                            <p className='text-[#586c58]'>Mar 21th 2025</p>

                                                       </div>
                                                  </a>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default BlogSinglePage