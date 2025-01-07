import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import navLogo from "../assets/logo-nav.png";
import dropbtn from "../assets/dropbtn.png";
import dropbtn2 from "../assets/dropbtn2.png";

const Navbar = () => {

  const currentUrl = window.location.href;

  
  const [scrolled, setScrolled] = useState(false);

  const [dropbutton, setDropbutton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='navbar'>
      <div className={`${scrolled ? "nav-dontdisplay" : "nav-display"}`}>
        <div className='navbar-sec1'>
          <img src={navLogo} alt="Navigation Logo" />
          <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/" className="navbar-sec1-link">MADHURIMA</Link>
        </div>
        <div className='navbar-secmid'>
          <p>The Music Society of Delhi Technological University</p>
        </div>
      </div>
      <div className='navbar-sec2'>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/doremipa" className={`${currentUrl === "https://madhurimadtu.com/doremipa" ? "navLink-highlight" : "navbar-link" }`}><p>Do Re Mi Pa</p></Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/accolades" className={`${currentUrl === "https://madhurimadtu.com/accolades" ? "navLink-highlight" : "navbar-link" }`}><p>Accolades</p></Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/artist-spotlight" className={`${currentUrl === "https://madhurimadtu.com/artist-spotlight" ? "navLink-highlight" : "navbar-link" }`}><p>Artist Spotlight</p></Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/events-performances" className={`${currentUrl === "https://madhurimadtu.com/events-performances" ? "navLink-highlight" : "navbar-link" }`}><p>Events/Performances</p></Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/about-us" className={`${currentUrl === "https://madhurimadtu.com/about-us" ? "navLink-highlight" : "navbar-link" }`}><p>About Us</p></Link>
      </div>
      <div className='nav-mobile'>
        <a onClick={() => {setDropbutton(!dropbutton)}} href="javascript:void(0)" className='dropbtn'><img className='dropIcon' src={dropbutton ? dropbtn2 : dropbtn }/></a>
        {dropbutton ? (<div className='drop-content'>
          <Link onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            setDropbutton(false);
          }} to="/doremipa" className="linknav-mobile"><p>Do Re Mi Pa</p></Link>
          <Link onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            setDropbutton(false);
          }} to="/accolades" className="linknav-mobile"><p>Accolades</p></Link>
          <Link onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            setDropbutton(false);
          }} to="/artist-spotlight" className="linknav-mobile"><p>Artist Spotlight</p></Link>
          <Link onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            setDropbutton(false);
          }} to="/events-performances" className="linknav-mobile"><p>Events/Performances</p></Link>
          <Link onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            setDropbutton(false);
          }} to="/about-us" className="linknav-mobile"><p>About Us</p></Link>
        </div>)
        :
        (<div className='empty-navmob'></div>)}
      </div>
    </div>
  )
}


export default Navbar
