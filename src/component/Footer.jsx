
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiQuora } from "react-icons/si";
import Navbarit from '../data/Navbar'
import SocialMediaIcons from '../data/SocialMediaLinks'
import PrivacyPolicy from '../data/PlicyLink'


const Footer = () => {
  return (
    <div className='p-4 mt-4 text-[#87a186] bg-[#0E2A10]'>
      <div className=' w-[90%] m-auto border border-[#87a186]/30 rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
          <div className='md:border-r  text-justify border-[#87a186]/20 pr-4'>
            <h2 className='text-2xl mb-4 uppercase'>About Us</h2>
            <p>IdeazVault.Com is a dynamic tech blog and full-stack web development website powered by the IdeazVault professional team. It offers insightful content on the latest trends and allows contributors to blog about technology and development.</p>
            <div className='border-t border-quaternary/30 flex  justify-around  mt-4 pt-4'>
              {
                SocialMediaIcons.map((items, i) => (
                  <a href={items.links} key={i} className=' hover:text-[#87a186] hover:bg-green-950 hover:border-[#87a186] border w-7 h-7 rounded-full bg-[#87a186] text-green-950  flex justify-center items-center hover:scale-110' >{items.Name}</a>
                ))
              }
            </div>
          </div>
          <div className='md:border-r  border-[#87a186]/20 pr-4 '>
            <div className=''>
              <h2 className='md:text-2xl text-xl mb-4 uppercase'>Connect With Us</h2>
              <ul className=' flex flex-col gap-4 uppercase hover:text-primery '>
                {
                  Navbarit.map((item, i) => (
                    <li key={i} className='inline-block mx-2 lg:mx-6 hover:text-quinary '><a href={item.link}>  {item.name}  </a></li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div>
            <div className=' md:border-0 border-t border-[#87a186]/20'>
              <h2 className='text-2xl mb-4 uppercase'></h2>
              <ul className=' flex flex-col gap-4 uppercase hover:text-primery '>
                {
                  PrivacyPolicy.map((item, i) => (
                    <li key={i} className='inline-block mx-2 lg:mx-6 hover:text-quinary '><a href={item.link}>  {item.name}  </a></li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className='md:border-l  border-[#87a186]/20 pl-4'>
            <h1 className='text-2xl mb-4 uppercase'>Contact Us</h1>
            <p>40, Diamond Colony DharNaka, Mhow</p>
            <p>Pin: 453441</p>
            <p>Dist: Indore</p>
            <p>State: Madhya Pradesh</p>
            <p>Country: India</p>
            <p>Phone: +91-9406680070</p>
          </div>
        </div>
        <div className='border-t border-[#87a186]/20 p-2 text-center md:flex md:justify-center gap-2'>
          <p>© 2025 All rights reserved. </p>
          <p className='text-center'> Made with ❤️ by IdeazVault Team</p>
        </div>
      </div>


    </div>
  )
}

export default Footer;
