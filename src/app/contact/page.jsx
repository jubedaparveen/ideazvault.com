import { Weight } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
  return (
    <div className='my-20 w-[90%] mx-auto '>
      <div className='md:text-5xl text-3xl tracking-widest gap-2 flex justify-center'><h2 className='
      first-letter:float-none 
      first-letter:mr-0 
      md:first-letter:text-5xl 
      first-letter:text-3xl
      first-letter:font-bold 
      first-letter:text-[#C4127B]
      first-line:tracking-widest 
      '> Contact  </h2> <h2 className='
      first-letter:text-3xl md:first-letter:text-5xl first-letter:font-bold first-letter:text-[#C4127B]'>Us</h2>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-10'>

        <div className='md:basis-sm shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)]  p-4  bg-[#87a186] text-green-950 font-semibold '>
            <h2 className='text-center text-2xl mb-2 font-bold'>Address</h2>
          <div className='pl-4 '>
            <p>40, Diamond Colony DharNaka, Mhow</p>
            <p>Pin: 453441</p>
            <p>Dist: Indore</p>
            <p>State: Madhya Pradesh</p>
            <p>Country: India</p>
          </div>
        </div>

        <div className='md:basis-sm shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)]  p-4  bg-[#87a186] text-green-950 font-semibold text-center'>
          <h2 className='text-center text-2xl mb-2 font-bold'>Call Us</h2>
          <p>Phone: +91-9406680070</p>
        </div>

        <div className='md:basis-sm shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)]  p-4  bg-[#87a186] text-green-950 font-semibold text-center'>
          <h2 className=' text-2xl mb-2 font-bold'>Email Id</h2>
          <p>Email Id: jubedaparveenh@gmail.com</p>
        </div>
      </div>

      <div className='mt-10 p-4 xl:w-[87%] mx-auto bg-[#87a186] shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)]'>
        <div className=''>
          <form method='' className='border border-[#0E2A10]/20 rounded-lg p-4'>
            <div className=' flex gap-4'>
              <input className=' w-full px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-[#94b196] placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest' type="text" placeholder='Enter your Name...'/>
              <input className=' w-full px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-[#94b196] placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest' type="text" placeholder='Enter your Email Id....'/>
            </div>
            <div className='my-6'>
              <input className=' w-full px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-[#94b196] placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest' type="text" placeholder='Subject...' />
            </div>
            <div className=' '>
              <textarea style={{height : '300px'}} className=' w-full px-3 py-2 rounded-sm bg-[#94b196] border border-[#0E2A10]/40 placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest' type="text" placeholder='Message here...'/>
            </div>
            <div className='mt-6 text-center border border-[#0E2A10]/40  bg-[#94b196] cursor-pointer py-2 rounded-full hover:bg-[#0E2A10] hover:text-[#87a186]'>
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage