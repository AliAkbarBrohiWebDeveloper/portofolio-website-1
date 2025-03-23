
"use client"
import Wrapper from '@/components/Wrapper'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,   
    });
  }, []);
  
  return (
    <section className="mt-16">
      <Wrapper>
        <form action="form" className="text-center flex flex-col items-center py-8 px-6 rounded-xl shadow-lg bg-white" data-aos="flip-left">
          <fieldset className="w-full max-w-lg border-4 border-teal-500 rounded-xl p-6">
            <legend className="font-bold text-3xl text-teal-500 underline mb-6">Contact Us</legend>
            
            {/* Name Field */}
            <div className="w-full mb-4">
              <label htmlFor="name" className="font-semibold text-xl text-gray-700">Name:</label>
              <input type="text" placeholder="Enter your name here" required className="mt-2 w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none" />
            </div>

            {/* Email Field */}
            <div className="w-full mb-4">
              <label htmlFor="email" className="font-semibold text-xl text-gray-700">Email:</label>
              <input type="email" placeholder="Enter your email here" required className="mt-2 w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none" />
            </div>

            {/* Phone Number Field */}
            <div className="w-full mb-4">
              <label htmlFor="phone" className="font-semibold text-xl text-gray-700">Phone Number:</label>
              <input type="number" placeholder="Enter your phone number here" required className="mt-2 w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none" />
            </div>

            {/* Message Field */}
            <div className="w-full mb-6">
              <label htmlFor="message" className="font-semibold text-xl text-gray-700">Message:</label>
              <textarea placeholder="Your message" rows={5} required className="mt-2 w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-teal-500 py-3 px-8 rounded-lg text-white text-xl font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg focus:outline-none">
              Send Message
            </button>
          </fieldset>
        </form>
      </Wrapper>
    </section>
  );
}

export default Contact;
