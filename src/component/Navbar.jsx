'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineLogin, } from "react-icons/ai";
import { MdAppRegistration } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import Logo from '../../public/images/logoo.png'



const Navbaritem = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogcategory",
  },
  {
    name: "Write With Us",
    link: "/writewithus",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]
const NavbaIcons = [
  {
    name: <AiOutlineLogin className="font-extrabold hover:border hover:border-quinary rounded-lg"/>,
    link: "/login",
  },
  {
    name: <MdAppRegistration className="font-extrabold hover:border hover:border-quinary "/>,
    link: "/signup",
  },
]

const Navbar = () => {
  // const [closeHamburger, setcloseHumburger] = useState(false);
  // const [changeLogo, setchangeLogo] = useState(true);
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

  return (
    
      <div className="bg-[#0E2A10] text-[#87a186]  py-1">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div className="text-[#87a186] border-l-2 border-r-2 px-4 w-20 md:w-[10%] h-6 md:h-[6%] flex items-center justify-center rounded-lg">
            <Link href={'/'}>
              <Image width={70} height={70} src={Logo} alt="" className="rounded-lg"/>
            </Link>
          </div>
          
          {/* desktop menu  */}
          <div className="hidden md:block text-[#87a186] tracking-widest">
            <ul className="flex">
              <div className="flex ">
              {Navbaritem.map((item, index) => (
                <li key={index} className="inline-block mx-2 lg:mx-6 hover:text-[#e9d5ca]">
                  <Link href={item.link}>
                    {item.name}
                  </Link>
                  </li>
                  ))}
              </div>
              <div className="border-l-2 border-[#87a186] pl-4 flex flex-row items-center">
                {NavbaIcons.map((item, index) => (
                  <li key={index} className="inline-block mx-4  hover:text-[#e9d5ca]">
                    <Link href={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </div>     
            </ul>
            
          </div>

          {/* mobile menu  */}
          <div className="md:hidden cursor-pointer">
            <div>
              {
                !mobileMenuOpen ? 
                <FaBars onClick={() => setmobileMenuOpen(!mobileMenuOpen)} className=" text-2xl"/> 
                : 
                <GiCrossMark onClick={() => setmobileMenuOpen(!mobileMenuOpen)} className=" text-2xl" />
              }
            </div>
            <div className={`absolute top-10 left-0 bg-[#0E2A10] m-2  p-4 rounded-lg w-[97%] ${mobileMenuOpen ? 'block' : 'hidden'}`}>
             
              <ul className="md:hidden flex flex-col gap-6 my-6 tracking-widest text-lg uppercase  border border-[#87a186]/30 rounded-lg p-4">
                {Navbaritem.map((item, index) => (
                  <li key={index} className="inline-block mx-2 lg:mx-4 hover:text-quinary">
                    <Link href={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </div>
      </div>
      
      
  );
};

export default Navbar;

{
  /* <div className='p-4 bg-primery'></div> use for bg  */
}
{
  /* <div className="p-4 bg-secondary"></div> */
}
{
  /* <div className="p-4 bg-tertiary"></div> */
}
{
  /* <div className='p-4 bg-quaternary'></div> // use for heading */
}
{
  /* <div className='p-4 bg-quinary'></div> // use for hover */
}
