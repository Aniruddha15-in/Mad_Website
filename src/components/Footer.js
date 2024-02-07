import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import madLogo from "../assets/logo-footer.png";
import emailFooter from "../assets/email-footer.png";
import ig from "../assets/ig-footer.png";
import yt from "../assets/youtube-footer.png";
import li from "../assets/linkedin-footer.png";
import logoMobile from '../assets/footer-logoMobile.png'

const Footer = () => {

  return (
    <>
    <div className='footer'>
      <div className='footer-sec1'>
        <img src={madLogo} className='madLogo-footer' alt="madLogo"/>
        <div>
          <img className='email-footer' src={emailFooter} alt="emailfooter"/>
          <p>madhurimamusicsociety@dtu.ac.in</p>
        </div>
      </div>
      <div className='footer-sec2'>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/" className='link1 linki'>Madhurima</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/" className='link2 linki'>Home</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/doremipa" className='link3 linki'>Do Re Mi Pa</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/accolades" className='link4 linki'>Accolades</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/about-us" className='link5 linki'>The Team</Link>
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
          <a href='https://www.instagram.com/madhurima.dtu/' target='_blank'><img src={ig} className='icon-footer' alt="ig"/></a>
          <a href='https://www.linkedin.com/company/madhurimadtu/mycompany/' target='_blank'><img src={li} className='icon-footer' alt="li"/></a>
          <a href='https://www.youtube.com/@MadhurimaDTU' target='_blank'><img src={yt} className='icon-footer' alt="yt"/></a>
        </div>
      </div>
    </div>

    <div className='footerMobile'>
      
      <div className='footer-sec1Mobile'>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/" className='link1 linki'>Madhurima</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/" className='link2 linki'>Home</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/doremipa" className='link3 linki'>Do Re Mi Pa</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/accolades" className='link4 linki'>Accolades</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/about-us" className='link5 linki'>The Team</Link>
      </div>
      
      <div className='footer-sec2Mobile'>
        <img src={logoMobile} className='madLogo-footer' alt="logoMobile"/>
        <div className='sec2-segment2'>
          <p className='p-segment2'>Follow Madhurima</p>
          <div className='icons-footer'>
            <a href='https://www.instagram.com/madhurima.dtu/' target='_blank'><img src={ig} className='icon-footer' alt="ig"/></a>
            <a href='https://www.linkedin.com/company/madhurimadtu/mycompany/' target='_blank'><img src={li} className='icon-footer' alt="li"/></a>
            <a href='https://www.youtube.com/@MadhurimaDTU' target='_blank'><img src={yt} className='icon-footer' alt="yt"/></a>
          </div>
          <div className='email-footer'>
            <img src={emailFooter} alt="emailfooter"/>
            <p>madhurimamusicsociety@dtu.ac.in</p>
          </div>
        </div>
      </div>
      
      <div className='footer-sec3Mobile'>
        <a><p className='footer-p1'>CONTACT US</p></a>
        <p className='footer-p2'>Delhi Technological University <br/>
            Shahbad Daulatpur, Main Bawana <br/>
            Road, Delhi <br/>
            Pincode -110042 <br/>
            <a><span className='span1-footer'>Email</span><span className='span2-footer'>: madhurimamusicsociety@dtu.ac.in</span></a>
        </p>
        
      </div>
    </div>
    </>
  )
}

export default Footer
