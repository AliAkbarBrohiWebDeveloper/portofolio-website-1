// import Services from '@/components/projects'
import Skills from '@/components/skills'
import React from 'react'
import AboutPage from './About/page'
import Contact from './Contact/page'
// import Hero from '@/components/Hero'


function page() {
  return (
    <div>
      {/* <Hero/> */}
    {/* <Services/> */}
    <Skills/>
    <AboutPage/>
    <Contact/>
    
    </div>
  )
}

export default page