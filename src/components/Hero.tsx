
"use client"
import React from 'react';
import Typewriter from 'typewriter-effect'; // Import the typewriter-effect library
import Wrapper from './Wrapper';
import Image from 'next/image';

const Hero = () => {
  const header = "I am Ali Akbar Brohi \n Frontend Web Developer";

  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-500 py-16">
      <Wrapper>
        <main className="flex justify-center items-center flex-col-reverse md:flex-row mt-6 space-y-8 md:space-y-0 md:space-x-16" data-aos="zoom-in-down">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-white font-bold text-4xl md:text-5xl whitespace-pre-line leading-tight">
              <Typewriter
                options={{
                  strings: [header],
                  autoStart: true,
                  loop: true,  // Makes the typing effect infinite
                  delay: 100,  // Speed of typing
                }}
              />
            </h1>
            <p className="font-medium text-white text-lg mt-4 max-w-3xl mx-auto md:mx-0">
              As a frontend web developer, I specialize in creating intuitive and visually engaging user interfaces that enhance digital experiences. Using my expertise in React, Next.js, and Tailwind CSS, I bring designs to life with high-performance, dynamic web applications. I focus on building responsive and accessible websites that deliver seamless user interactions across all devices.
            </p>

            {/* Button Section */}
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <button className="py-2 px-6 bg-teal-700 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>

              <a 
                href="/Ali_Akbar_Brohi_CV.pdf" // Link to the CV file in the public folder
                download // This will trigger the file download
                className="py-2 px-6 bg-teal-700 text-white text-lg font-semibold rounded-s-2xl shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src='/profile1.png'
              alt="profile-picture"
              height={400}
              width={400}
              className="rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </main>
      </Wrapper>
    </section>
  );
};

export default Hero;
