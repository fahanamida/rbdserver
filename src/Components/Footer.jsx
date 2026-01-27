import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { TiHeartFullOutline } from "react-icons/ti";



function Footer() {
  return (
    <>
    <div  className='container-fluid p-5 text-center text-light' style={{backgroundColor:'rgba(29, 52, 168, 1)'}}>
        <h1>Contact With Us</h1>
        <h4> <MdOutlineMail /> {' '}resumebuilder@gmail.com</h4>
        <h3><FaPhoneVolume />{' '}9564856218</h3>
        <div className='w-100 d-flex gap-2 justify-content-center' style={{fontSize:'30px'}}>
            <SiWhatsapp />
            <BsInstagram />
            <BiLogoLinkedin />
        </div>
        <h2>Dsingned & Built <TiHeartFullOutline style={{color:'red'}} /> With Using React</h2>
    </div>    
    </>
  )
}

export default Footer
