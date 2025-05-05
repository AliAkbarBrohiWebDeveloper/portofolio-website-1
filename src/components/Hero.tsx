

"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';
import Wrapper from './Wrapper';
import Image from 'next/image';

const Hero = () => {
  // const header = "I am Ali Akbar Brohi \n Frontend Web Developer";

  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-500 py-16 px-4 sm:px-6 lg:px-8 w-full sm:w-auto">
      <Wrapper>
        <main className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16" data-aos="zoom-in-down">
          
       
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl whitespace-pre-line leading-tight">
              <h1 className='text-3xl md:text-5xl text-yellow-300'><span className='text-white'>HI ,I&apos;M</span> ALI AKBAR BROHI</h1>
              <Typewriter
                options={{
                  strings: ["FRONTEND DEVELOPER","PROGAMMER","CODER","WEB DEVELOPER"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </h1>

            <p className="font-medium text-white text-base sm:text-lg mt-4 max-w-xl mx-auto md:mx-0">
              As a frontend web developer, I specialize in creating intuitive and visually engaging user interfaces that enhance digital experiences. Using my expertise in React, Next.js, and Tailwind CSS, I bring designs to life with high-performance, dynamic web applications. I focus on building responsive and accessible websites that deliver seamless user interactions across all devices.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="py-2 px-6 bg-teal-600 hover:bg-yellow-400 text-white text-base sm:text-lg font-semibold rounded-2xl shadow-lg  transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>

              <a 
                href="/Resume Builder2.pdf"
                download
                className="py-2 px-6 bg-teal-600 hover:bg-yellow-400 text-white text-base sm:text-lg font-semibold rounded-2xl shadow-lg  transition-all duration-300 transform hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src='/profile1.png'
              alt="profile-picture"
              height={300}
              width={300}
              className="rounded-full border-4 border-white shadow-xl object-cover max-w-[80%] sm:max-w-[300px] md:max-w-[400px] h-auto"
            />
          </div>
        </main>
      </Wrapper>
    </section>
  );
};

export default Hero;



