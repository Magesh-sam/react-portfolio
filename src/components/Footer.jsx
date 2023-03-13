import React from 'react'
import '../styles/footer.css'
import {FaGithub,FaLinkedin,FaEnvelope} from 'react-icons/fa'


export default function Footer() {
  return (
    <div className='footer'>
        <a className='footertxt' href='https://github.com/Magesh-sam/react-portfolio' target='_blank'>Designed & Developed by Mageshkannan Annathurai</a>
        <div className='social-icons'>
          <a title='Github' className='sicon' target='_blank' href="https://github.com/Magesh-sam"> <FaGithub/> </a>
          <a title='Linkedin' className='sicon' target='_blank' href="https://www.linkedin.com/in/mageshkannan-annathurai/"> <FaLinkedin/> </a>
          <a title='Mail' className='sicon' target='_blank' href="mailto:mageshkannanam@gmail.com"> <FaEnvelope/> </a>
        </div>
    </div>
  )
}
