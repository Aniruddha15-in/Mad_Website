import React from 'react'
import { Link } from 'react-router-dom';
import madLogo from "../assets/logo-footer.png";
import emailFooter from "../assets/email-footer.png";
import ig from "../assets/ig-footer.png";
import yt from "../assets/youtube-footer.png";
import li from "../assets/linkedin-footer.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-sec1'>
        <img src={madLogo} className='madLogo-footer' />
        <div>
          <img className='email-footer' src={emailFooter} />
          <p>madhurimamusicsociety@dtu.ac.in</p>
        </div>
      </div>
      <div className='footer-sec2'>
        <Link to="/" className='link1 linki'>Madhurima</Link>
        <Link to="/" className='link2 linki'>Home</Link>
        <Link to="/doremipa" className='link3 linki'>Do Re Mi Pa</Link>
        <Link to="/accolades" className='link4 linki'>Accolades</Link>
        <Link to="/about-us" className='link5 linki'>The Team</Link>
      </div>
      <div className='footer-sec3'>
        <a><p className='footer-p1'>Contact Us</p></a>
        <p>Delhi Technological University <br/>
            Shahbad Daulatpur, Main Bawana <br/>
            Road, Delhi <br/>
            Pincode -110042
        </p>
        <a><span className='span1-footer'>Email</span><span className='span2-footer'>: madhurimamusicsociety@dtu.ac.in</span></a>
        <div className='icons-footer'>
          <img src={ig} className='icon-footer' />
          <img src={li} className='icon-footer' />
          <img src={yt} className='icon-footer' />
        </div>
      </div>
    </div>
  )
}

export default Footer
