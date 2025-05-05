import React from 'react'
import { FaLinkedin, } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (

    <footer className='text-xl font-semibold text-center mt-9 bg-black text-white'>

<div>
<p className='text-sm'>&copy;2024 Portfolio website all rights reserverd</p>

</div>
<div className='flex justify-center items-center mt-5 gap-3 font-bold text-3xl'>
    <FaLinkedin/>

<div>
    <div>

<FaFacebook/>

    </div>



</div>


</div>


    </footer>
   
  )
}

export default Footer