import { Link } from 'lucide-react'
import React from 'react'

const TechSection = () => {
     return (
          <div className='text-[#0E2A10] '>
               <div className='flex justify-between mb-3 border-b border-[#87a186]/100'>
                    <div className='text-2xl  '> Tech Blogs </div>
                    <a href={'/blogcategory'}>
                         <p className='underline hover:text-green-900'> See All TechBlogs </p>
                    </a>
               </div>

               <div className='w-full flex flex-col md:flex-row gap-4 '>
                    <div className='basis-[85%] '>
                         <div className='flex flex-col md:flex-row gap-4'>
                              <div className='basis-1/3 border-r border-[#87a186]/100 '>
                                   <div className='pr-4'>
                                        <img src="images/posts/post-img-1.jpg" alt="" />
                                        <div className='text-start p-4 '>
                                             <span className='flex gap-1 text-[#232b22]/50'><p>Tech Blog . </p><p> Mar 13th 25</p></span>
                                             <a href="/"><h2 className='text-xl tracking-widest mb-2 hover:text-green-900 hover:underline'>JavaScript SEO: How Search Engines Process JavaScript Websites</h2></a>
                                             
                                             <div className='flex gap-4 pb-3 mt-3 items-center border-b border-[#87a186]/100'>
                                                  <span className='w-10 h-10 rounded-full'><img src="images/person/person.jpg" alt="" className='w-10 h-10 rounded-full' /></span>
                                                  <p>Jubeda Parveen </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='pr-4'>
                                        <img src="images/posts/post-img-2.jpg" alt="" />
                                        <div className='text-start p-4 '>
                                             <span className='flex gap-1 text-[#232b22]/50'><p>Tech Blog . </p><p> Mar 13th 25</p></span>
                                             <a href="/"><h2 className='text-xl tracking-widest mb-2 hover:text-green-900 hover:underline'>JavaScript SEO: How Search Engines Process JavaScript Websites</h2></a>
                                             
                                             <div className='flex gap-4 pb-3 mt-3 items-center border-b border-[#87a186]/100'>
                                                  <span className='w-10 h-10 rounded-full'><img src="images/person/person.jpg" alt="" className='w-10 h-10 rounded-full' /></span>
                                                  <p>Jubeda Parveen </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className='basis-1/3 border-r border-[#87a186]/100 '>
                                   <div className='pr-4'>
                                        <img src="images/posts/post-img-3.jpg" alt="" />
                                        <div className='text-start p-4 '>
                                             <span className='flex gap-1 text-[#232b22]/50'><p>Tech Blog . </p><p> Mar 13th 25</p></span>
                                             <a href="/"><h2 className='text-xl tracking-widest mb-2 hover:text-green-900 hover:underline'>JavaScript SEO: How Search Engines Process JavaScript Websites</h2></a>
                                             
                                             <div className='flex gap-4 pb-3 mt-3 items-center border-b border-[#87a186]/100'>
                                                  <span className='w-10 h-10 rounded-full'><img src="images/person/person.jpg" alt="" className='w-10 h-10 rounded-full' /></span>
                                                  <p>Jubeda Parveen </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='pr-4'>
                                        <img src="images/posts/post-img-4.jpg" alt="" />
                                        <div className='text-start p-4 '>
                                             <span className='flex gap-1 text-[#232b22]/50'><p>Tech Blog . </p><p> Mar 13th 25</p></span>
                                             <a href="/"><h2 className='text-xl tracking-widest mb-2 hover:text-green-900 hover:underline'>JavaScript SEO: How Search Engines Process JavaScript Websites</h2></a>
                                             
                                             <div className='flex gap-4 pb-3 mt-3 items-center border-b border-[#87a186]/100'>
                                                  <span className='w-10 h-10 rounded-full'><img src="images/person/person.jpg" alt="" className='w-10 h-10 rounded-full' /></span>
                                                  <p>Jubeda Parveen </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className='basis-1/2 '>
                                   <div className=''>
                                        <img src="images/posts/post-img-5.jpg" alt="" />
                                        <div className='text-start p-4 '>
                                             <span className='flex gap-1 text-[#232b22]/50'><p>Tech Blog . </p><p> Mar 13th 25</p></span>
                                             <a href="/"><h2 className='text-2xl tracking-widest mb-2 hover:text-green-900 hover:underline'>JavaScript SEO: How Search Engines Process JavaScript Websites</h2></a>
                                             <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt similique, explicabo et accusantium dicta mollitia laborum quaerat unde molestiae aspernatur suscipit dolorem eligendi autem assumenda natus est! Harum, autem labore! </p>
                                             <div className='flex gap-4 pb-3 mt-3 items-center border-b border-[#87a186]/100'>
                                                  <span className='w-10 h-10 rounded-full'><img src="images/person/person.jpg" alt="" className='w-10 h-10 rounded-full' /></span>
                                                  <p>Jubeda Parveen </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className=''>
                                        <img src="images/posts/post-img-6.jpg" alt="" />
                                        <div className='text-start p-4 '>
                                             <span className='flex gap-1 text-[#232b22]/50'><p>Tech Blog . </p><p> Mar 13th 25</p></span>
                                             <a href="/"><h2 className='text-2xl tracking-widest mb-2 hover:text-green-900 hover:underline'>JavaScript SEO: How Search Engines Process JavaScript Websites</h2></a>
                                             <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt similique, explicabo et accusantium dicta mollitia laborum quaerat unde molestiae aspernatur suscipit dolorem eligendi autem assumenda natus est! Harum, autem labore! </p>
                                             <div className='flex gap-4 pb-3 mt-3 items-center border-b border-[#87a186]/100'>
                                                  <span className='w-10 h-10 rounded-full'><img src="images/person/person.jpg" alt="" className='w-10 h-10 rounded-full' /></span>
                                                  <p>Jubeda Parveen </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>
                    <div className='basis-[15%] border border-[#87a186]/100 px-4'>
                         <div className='border-b border-[#87a186]/100 p-2'>
                              <h2 className='text-2xl tracking-widest font-bold'> Tranding Topics  </h2>
                         </div>
                         
                         <div className=''>                              
                              <div className='text-start py-4 '>
                                   <span className='flex  text-sm text-[#232b22]/50'><p>Tech Blog . </p><p> Mar 13th 25</p></span>
                                   <a href="/"><h2 className='mb-2 hover:text-green-900 hover:underline'>JavaScript SEO: How Search Engines Process JavaScript Websites</h2></a>
                                   
                                   <div className='flex gap-2 pb-2 mt-2 items-center border-b border-[#87a186]/100'>
                                        <span className='w-5 h-5 rounded-full'><img src="images/person/person.jpg" alt="" className='w-5 h-5 rounded-full' /></span>
                                        <p className='text-sm'>Jubeda Parveen </p>
                                   </div>
                              </div>
                         </div>
                         <div className=''>                              
                              <div className='text-start py-2 '>
                                   <span className='flex  text-sm text-[#232b22]/50'><p>Tech Blog . </p><p> Mar 13th 25</p></span>
                                   <a href="/"><h2 className='mb-2 hover:text-green-900 hover:underline'>JavaScript SEO: How Search Engines Process JavaScript Websites</h2></a>
                                   
                                   <div className='flex gap-2 pb-2 mt-2 items-center border-b border-[#87a186]/100'>
                                        <span className='w-5 h-5 rounded-full'><img src="images/person/person.jpg" alt="" className='w-5 h-5 rounded-full' /></span>
                                        <p className='text-sm'>Jubeda Parveen </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default TechSection