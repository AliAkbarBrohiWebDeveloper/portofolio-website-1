

import Image from 'next/image'
import React from 'react'

import Wrapper from '@/components/Wrapper'

const AboutPage = () => {
  return (
    <section className='mt-16'>
      <Wrapper>
        <main className='flex justify-center items-center gap-12 px-6 md:px-12 py-8 flex-col-reverse md:flex-row' data-aos="fade-left">
          
          {/* Text Section */}
          <div className='flex flex-col items-center md:items-start'>
            <h3 className='text-center md:text-left text-teal-500 text-3xl font-extrabold mb-6 underline'>About Me</h3>
            <p className='text-center md:text-left max-w-[800px] text-lg font-medium text-gray-400 leading-relaxed'>
              As a frontend web developer, I specialize in building engaging and user-friendly interfaces that elevate the overall web experience. 
              With a strong foundation in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS, I transform creative concepts into fully functional, 
              responsive websites. I have a keen eye for design and am passionate about keeping up with the latest industry trends and technologies, 
              ensuring that my projects are visually appealing, performance-optimized, and accessible. By collaborating closely with designers 
              and backend developers, I strive to deliver seamless and dynamic web applications that meet and exceed user expectations.
            </p>

            {/* Hire Me Button */}
            <button className='mt-8 py-3 px-8 bg-teal-500 rounded-lg text-white text-lg font-semibold hover:scale-105 duration-300 hover:shadow-lg'>
              Hire Me
            </button>
          </div>

          {/* Image Section */}
          <div className='flex justify-center md:justify-start'>
            <Image src='/About.jpg' alt='About-Image' height={500} width={500} className='rounded-3xl shadow-xl transform hover:scale-105 duration-300' />
          </div>

        </main>
      </Wrapper>
    </section>
  )
}

export default AboutPage
