

import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'

const SkillsSection = [
  {
    img: "/html.png",
    desc: "HTML",
    percentage: "90%"
  },
  {
    img: "/css.png",
    desc: "CSS",
    percentage: "75%"
  },
  {
    img: "/type.png",
    desc: "TypeScript",
    percentage: "90%"
  },
  {
    img: "/java.png",
    desc: "JavaScript",
    percentage: "70%"
  },
  {
    img: "/react.png",
    desc: "React",
    percentage: "65%"
  },
  {
    img: "/next.png",
    desc: "Next.js",
    percentage: "75%"
  },
]

const Skills = () => {
  return (
    <Wrapper>
      <main className="mt-16">
        <div>
          <h5 className="text-center text-4xl font-extrabold text-gray-800 underline mb-10">
            Skills
          </h5>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {SkillsSection.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="flex flex-col items-center justify-center p-4 shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4">
                <Image
                  src={item.img}
                  alt={`${item.desc}-logo`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {item.desc}
              </h4>
              <p className="text-lg font-medium text-gray-600">
                {item.percentage}
              </p>
            </div>
          ))}
        </div>
      </main>
    </Wrapper>
  )
}

export default Skills
