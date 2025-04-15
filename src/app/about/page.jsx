import React from 'react'

const AboutPage = () => {
  return (
    <div className='my-20 text-[#0E2A10] w-[90%] mx-auto'>
     
      <div className=" text-[#0E2A10] w-[90%] mx-auto ">
        <h2 className=" text-4xl bg-white/60 font-bold rounded-lg border-l-5 border-r-5 border-green-800 px-6 py-6  text-center"><span className="uppercase tracking-widest">About Us</span> 
          <p className="text-justify text-lg mt-4 bg-white/60 border border-green-800 rounded-lg p-6 shadow-xl border-l-5 border-r-5">
            Welcome to IdeazVault.com, your go-to source for insightful articles and resources on a variety of topics. Our platform is dedicated to providing high-quality content that informs, educates, and inspires our readers. We believe in the power of knowledge and strive to create a space where individuals can explore new ideas and perspectives.
          </p>
        </h2>
        <div className="flex md:flex-row flex-col gap-4 mt-20 ">
          <div className="basis-2/3 bg-white/60  shadow-xl text-lg border border-[#0E2A10]/20 rounded-lg p-6">
            <h2 className="text-4xl font-semibold mt-6 mb-2 underline"> IdeazVault.com </h2>
            <p className=" first-letter:font-bold first-letter:text-5xl first-line:uppercase first-line:tracking-widest  first-letter:text-[#C4127B] text-justify">
            IdeazVault.com is a platform dedicated to sharing knowledge and insights on a wide range of topics. Our mission is to provide high-quality content that informs, educates, and inspires our readers. We believe in the power of words and the impact they can have on individuals and communities.
            </p>

          </div>
          <div className="basis-1/2 shadow-xl border border-[#0E2A10]/20 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className=" ">
                <img src="images/about/im.jpg" alt="vedshree" />
              </div>
              <div className="w-full h-full">
                <img src="images/about/im2.jpg" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <img src="images/about/im.jpg" alt="" />
              </div>
              <div>
                <img src="images/about/im3.jpg" alt="" />
              </div>
              <div>
                <img src="images/about/im4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-lg bg-white/60 border border-[#0E2A10]/20 rounded-lg p-6 mt-4 shadow-xl ">
          <h2 className="text-2xl font-semibold mt-6 mb-2">Our Vision</h2>
          <p className="text-justify">
            At IdeazVault.com, we envision a world where knowledge is accessible to everyone. We aim to bridge the gap between information and understanding, empowering individuals to make informed decisions and contribute positively to society. Our platform serves as a hub for diverse voices and perspectives, fostering a culture of learning and growth.
            Our vision is to create a space where knowledge is freely shared and accessible to all. We aim to empower individuals through information, fostering a community of learners and thinkers.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Our Values</h2>
          <p className="text-justify">
            At IdeazVault.com, we uphold a set of core values that guide our content creation and community engagement. We believe in the importance of integrity, quality, and respect in all our interactions. Our commitment to these values ensures that we provide our readers with accurate, reliable, and valuable information.
            We are committed to integrity, quality, and respect. Our values guide our content creation process and ensure that we deliver only the best to our readers.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Integrity – We value honesty and transparency in our content.</li>
            <li>Quality – We strive for excellence in everything we do.</li>
            <li>Respect – We respect our readers and aim to provide valuable insights.</li>
          </ul>
        </div>
      </div>
    
    </div>
  )
}

export default AboutPage