import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../assets/logo-nav.png";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  const currentUrl = window.location.href;

  const currUrl = useLocation();
  const [scrolled, setScrolled] = useState(false);

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
          <img src={navLogo} />
          <Link to="/" className="navbar-sec1-link">MADHURIMA</Link>
        </div>
        <div className='navbar-secmid'>
          <p>The Music Society of Delhi Technological University</p>
        </div>
      </div>
      <div className='navbar-sec2'>
        <Link to="/doremipa" className={`${currentUrl === "https://madhurimadtu.com/doremipa" ? "navLink-highlight" : "navbar-link" }`}><p>Do Re Mi Pa</p></Link>
        <Link to="/accolades" className={`${currentUrl === "https://madhurimadtu.com/accolades" ? "navLink-highlight" : "navbar-link" }`}><p>Accolades</p></Link>
        <Link to="/artist-spotlight" className={`${currentUrl === "https://madhurimadtu.com/artist-spotlight" ? "navLink-highlight" : "navbar-link" }`}><p>Artist Spotlight</p></Link>
        <Link to="/events-performances" className={`${currentUrl === "https://madhurimadtu.com/events-performances" ? "navLink-highlight" : "navbar-link" }`}><p>Events/Performances</p></Link>
        <Link to="/about-us" className={`${currentUrl === "https://madhurimadtu.com/about-us" ? "navLink-highlight" : "navbar-link" }`}><p>About Us</p></Link>
      </div>
    </div>
  )
}

// {`${currentUrl === "http://localhost:3000/doremipa" ? "navLink-highlight" : "navbar-link" }`}

export default Navbar
