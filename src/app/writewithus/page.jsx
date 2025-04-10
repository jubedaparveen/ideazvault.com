import React from 'react'

const WriteWithUs = () => {
  return (
    <div className='my-20 text-[#0E2A10] w-[90%] mx-auto'>
      <div className='flex md:flex-row flex-col gap-4 '>
        <div className='basis-2/2 text-lg border border-[#0E2A10]/20 rounded-lg p-6'>
          <div className='border-b border-[#0E2A10]/20 pb-4'>
            <h2 className='text-4xl font-semibold mt-6 mb-2 underline'> Write With Us </h2>
            <p className=' first-letter:font-bold first-letter:text-5xl first-line:uppercase first-line:tracking-widest  first-letter:text-[#C4127B]'> Ideazvault.com invites tech enthusiasts, developers, and industry experts to contribute valuable, high-quality content on technology, programming, and web development. If you are passionate about sharing your knowledge, join us as a guest contributor! </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mt-6 mb-2'>Why you should write for Ideazvault?</h2>
            <p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Share your expertise with a global audience</li>
                <li>Get featured on a reputable tech blob </li>
                <li>Build your brand as a tech writer</li>
                <li>Gain exposure for your projects or portfolio</li>
              </ul>
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mt-6 mb-2'>Topic We Accept</h2>
            <p>
              We are looking for articles on:
              <ul className="list-disc pl-5 space-y-2">
                <li>Web Development (Frontend, Backend, Full-Stack)</li>
                <li>Programming Languages & Frameworks (JavaScript, Python, React, etc.)</li>
                <li>DevOps, Cloud Computing, and Server Management</li>
                <li>AI, Machine Learning, and Data Science</li>
                <li>Software Development Best Practices</li>
                <li>Tech Trends and Innovations</li>
              </ul>
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mt-6 mb-2'>Writing Guidelines</h2>
            <p>
              To ensure quality and consistency, follow these guidelines:
              <ul className="list-disc pl-5 space-y-2">
                <li>Original Content – Your article must be 100% unique and not published elsewhere.</li>
                <li>Well-structured & Informative – Write clear, concise, and well-organized articles. Use headings, bullet points, and code snippets where necessary.</li>
                <li>Minimum Word Count – Articles should be at least 800 words.</li>
                <li>Use Examples & Code Snippets – If writing about development, include relevant code samples.</li>
                <li>Cite Sources – If referencing data or third-party content, provide proper attribution.</li>
                <li>	SEO-Friendly – Use simple language, proper keywords, and headings to enhance readability.</li>
              </ul>
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mt-6 mb-2'>How to Submit</h2>
            <p>
              <ul  className="list-disc pl-5 space-y-2">
                <li>	Pitch Your Idea – Send us a short outline of your topic.</li>
                <li>	Write & Format – Follow our guidelines and craft a high-quality article.</li>
                <li>	Submit for Review – Email us your draft with relevant images (if needed).</li>
                <li>	Feedback & Approval – Our editorial team will review and provide suggestions.</li>
                <li>	Publication – Once approved, your article will go live on IdeazVault.com!</li>
              </ul> 
            </p>
          </div>
        </div>
        <div className='basis-1/2 border border-[#0E2A10]/20 rounded-lg p-4'>
        <h3 className='md:mt-20 mb-5 text-2xl tracking-widest uppercase text-center font-semibold border-b border-[#0E2A10]/60'>Submit your Work Here </h3>
        <form method='' className='bg-[#87a186] p-4'>
          <div><input className='w-full outline-0 px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-[#94b196] placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest' type="text" placeholder='Name'/></div>
          <div><input className='w-full outline-0 px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-[#94b196] placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest mt-3' type="text" placeholder='Email'/></div>
          <div><input className='w-full outline-0 px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-[#94b196] placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest mt-3' type="text" placeholder='Subjuct'/></div>
          <div><textarea style={{height:'150px'}} className='w-full outline-0 px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-[#94b196] placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest mt-3' type="text" placeholder='Message'/></div>
          <div className=''>
            <input className='w-full px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-[#94b196] placeholder:text-[#0E2A10]/40 placeholder:text-sm / mt-3' type="file" placeholder='Name'/>
            <p className='text-sm text-[#0E2A10]/60 mt-1 underline'>Submit your document in PDF format only</p>
            </div>
            
        </form>
        </div>
      </div>

    </div>
  )
}

export default WriteWithUs