import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";



const Contact = () => {
  return (
    <>
    <div className='container contact' id='contact'
    data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
      <h1>Contact</h1>
      <div className='contact-icon' >
        <a href="https://www.linked.com" target='_black' className='items'>
          <CiLinkedin className='icons' />
        </a>
        <a href="mailto:akr256181@gmail.com" target="_blank" className='items'>
  <BiLogoGmail className='icons' />
</a>


        <a href="https://www.github.com" target='_black' className='items'>
          <FaGithubSquare className='icons' />
        </a>        
      </div>
    </div>
    </>
  )
}

export default Contact
