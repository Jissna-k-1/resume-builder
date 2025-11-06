import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'380px',backgroundColor:'purple',color:'white'}} 
    className='d-flex justify-content-center align-items-center p-5 flex-column'>
      <h3>Contact Us</h3>
      <h5 className="fw-bolder" style={{fontFamily:'serif'}}><IoIosMail /> resumebuilder@gmail.com</h5>
      <h5 className="fw-bolder"><FaPhoneFlip /> 807800057</h5>
      <h3 className='fs-4'>Connect with Us</h3>
      <div className="d-flex justify-content-center align-items-center fs-4 my-2">
      <FaWhatsapp className='me-3' />
      <FaFacebook className='me-3' />
      <FaInstagram />

      </div>
    <p style={{fontFamily:'serif'}}>Designed & built with ❤️ using React</p>

    </div>
  )
}

export default Footer
