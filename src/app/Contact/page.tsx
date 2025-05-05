
"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { supabase } from "@/lib/supabaseClient";
import Wrapper from '@/components/Wrapper';
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from 'react-icons/fa';

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="mt-20">
      <Wrapper>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-teal-600 text-center mb-8 border-b-4 pb-4 border-teal-400">
            Contact Us
          </h2>

          <div className="space-y-6">
            {/* Name */}
            <div className="relative">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Name</label>
              <div className="flex items-center border-2 border-gray-300 rounded-lg px-4 py-2 focus-within:border-teal-500">
                <FaUser className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full outline-none text-gray-700 bg-transparent"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Email</label>
              <div className="flex items-center border-2 border-gray-300 rounded-lg px-4 py-2 focus-within:border-teal-500">
                <FaEnvelope className="text-gray-400 mr-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full outline-none text-gray-700 bg-transparent"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Phone</label>
              <div className="flex items-center border-2 border-gray-300 rounded-lg px-4 py-2 focus-within:border-teal-500">
                <FaPhoneAlt className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  required
                  className="w-full outline-none text-gray-700 bg-transparent"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label className="block mb-2 text-lg font-semibold text-gray-700">Message</label>
              <div className="flex items-start border-2 border-gray-300 rounded-lg px-4 py-2 focus-within:border-teal-500">
                <FaCommentDots className="text-gray-400 mt-1 mr-3" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full outline-none text-gray-700 bg-transparent resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:scale-105 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </Wrapper>
    </section>
  );
};

export default Contact;
