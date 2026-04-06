import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
        <h2>Contact Me</h2>
        <div className="contact-icons">
        
            <a href="https://github.com/laibaaslam713" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
            </a>

            <a href="	https://www.linkedin.com/in/laiba-aslam-070b53275/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
            </a>

            <a href="https://wa.me/923121494114" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
            </a>

            <a href="mailto:aslamlaiba713@gmail.com">
            <MdEmail className="icon" />
        </a>

  </div>
    </div>
    
  )
}

export default Contact