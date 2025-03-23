

import Image from 'next/image'
import React from 'react'
import Wrapper from '@/components/Wrapper'

const projects = [
 
  {
    src: "/ecom1.png",
    desc: "Ui Ux Ecommerce website",
    languages: ["Next js", "Tailwind Css"],
    link: "https://e-commerce-website-nu-beryl.vercel.app/"
  },
  {
    src: "/blog.png",
    desc: "Blog website",
    languages: ["React", "Next js", "Type script"],
    link: "https://blog-website-gamma-red.vercel.app/"
  },
  {
    src: "/funct.png",
    desc: "Full stack functional E-commerce-website",
    languages: ["Next js", "Tailwind CSS", "Type script", "Sanity", "Redux"],
    link: "https://figma-hakathon-eodr.vercel.app/"
  }
]

const Services = () => {
  return (
    <section className="bg-gray-50 py-16">
      <Wrapper>
        <div className="text-center">
          <h3 className="font-bold text-4xl text-teal-600 underline decoration-teal-500">
            My Projects
          </h3>
        </div>

        <div className="flex justify-between items-center mt-10 gap-6 px-6 flex-col md:flex-row">
          {projects.map((item, index) => (
            <a 
              key={index}
              href={item.link} // Link for each project
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="zoom-in"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.src}
                  alt={item.desc}
                  width={400}  // Set a fixed width
                  height={250} // Set a fixed height
                  objectFit="cover" // Ensures the image fills the space without distortion
                  className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-xl mt-4 text-teal-600">{item.desc}</h3>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {item.languages.map((language, index) => (
                  <span
                    key={index}
                    className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Services
