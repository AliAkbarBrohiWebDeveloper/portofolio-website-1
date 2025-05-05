

"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { supabase } from "@/lib/supabaseClient"; 

import Wrapper from '@/components/Wrapper';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase
      .from('contacts')
      .insert([formData]);

    if (error) {
      alert('❌ Error: ' + error.message);
    } else {
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="mt-16">
      <Wrapper>
        <form onSubmit={handleSubmit} className="text-center flex flex-col items-center py-8 px-6 rounded-xl shadow-lg bg-white" data-aos="flip-left">
          <fieldset className="w-full max-w-lg border-4 border-teal-500 rounded-xl p-6">
            <legend className="font-bold text-3xl text-teal-500 underline mb-6">Contact Us</legend>

            {/* Name */}
            <div className="w-full mb-4">
              <label htmlFor="name" className="font-semibold text-xl text-gray-700">Name:</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name here"
                required
                className="mt-2 w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="w-full mb-4">
              <label htmlFor="email" className="font-semibold text-xl text-gray-700">Email:</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email here"
                required
                className="mt-2 w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="w-full mb-4">
              <label htmlFor="phone" className="font-semibold text-xl text-gray-700">Phone Number:</label>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number here"
                required
                className="mt-2 w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="w-full mb-6">
              <label htmlFor="message" className="font-semibold text-xl text-gray-700">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                required
                className="mt-2 w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-teal-600  hover:bg-yellow-400 py-3 px-8 rounded-lg text-white text-xl  font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg focus:outline-none"
            >
              Send Message
            </button>
          </fieldset>
        </form>
      </Wrapper>
    </section>
  );
};

export default Contact;


