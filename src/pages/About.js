import React from 'react'
import Carousel from '../components/Carousel'
import AboutUsCard from '../components/AboutUsCard'
import CouncilCard from '../components/CouncilCard'

import noel from "../assets/noel-about.png";
import noelmobile from "../assets/noel-about-mobile.png";

import duality from '../assets/acts/duality.png';
import acapella from '../assets/acts/acapella.png';
import choir from '../assets/acts/choir.png';
import dhoomketu from '../assets/acts/dhoomketu.png';

import anubhav from '../assets/council/AnubhavF-100.jpg'
import sabya from '../assets/council/SabyaF-100 1.jpg'
import daksh from '../assets/council/DakshF-100.jpg'
import akk from '../assets/council/AkkshittaF-100.jpg'
import ansh from '../assets/council/JindalF-100.png'
import rajat from '../assets/council/RajatF-100.jpg'

const About = () => {
  const images = [
    duality,
    acapella,
    choir,
    dhoomketu
  ];
  return (
    <div className='about'>
      
      <div style={{ paddingTop: '150px' }}>
        <Carousel images = {images} acts={-1}/>
      </div>

    
      <AboutUsCard image={noel} imagemobile={noelmobile} desc="Madhurima is a student-led society of Delhi Technological University that aims to promote and celebrate music among the student community. Madhurima provides a platform for talented musicians to showcase their skills and explore their passion for music."/>

      <div>
        <div className='council-text'>COUNCIL</div>
        <div className='year-wrapper'>
          <div className='year'>
            2023-24
          </div>
        </div>


        <div className="council-pos">PRESIDENT</div>
        <div className='card-wrapper'>
          <CouncilCard img={anubhav} name = "Anubhav" alt="Anubhav" />
        </div>

        <div className="council-column">
          <div>
            <CouncilCard img={sabya} name = "Sabya" alt="Sabya" />
          </div>
          <div className='council-pos'>VICE-PRESIDENTS</div>
          <div>
            <CouncilCard img={daksh} name = "Daksh" alt="Daksh" />
          </div>
        </div>
        <div>
          
        </div>
        <div className="council-column">
          <div>
            <CouncilCard img={akk} name = "Akkshita" alt="Akkshita" />
          </div>
          <div className='council-pos'>GENERAL SECRETARIES</div>
          <div>
            <CouncilCard img={ansh} name = "Ansh" alt="Ansh" />
          </div>
        </div>


        <div className="council-pos">TREASURER</div>
        <div className='card-wrapper'>
          <CouncilCard img={rajat} name = "Rajat" alt="Rajat" />
        </div>

      </div>
    </div>
  )
}

export default About
