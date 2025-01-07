import React, { useState } from 'react'
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
  const [selectedYear, setSelectedYear] = useState('2023-24');

  const councilData = {
    '2023-24': {
      president: { name: 'Anubhav', img: anubhav },
      vicePresident1: { name: 'Sabya', img: sabya },
      vicePresident2: { name: 'Daksh', img: daksh },
      genSec1: { name: 'Akkshita', img: akk },
      genSec2: { name: 'Ansh', img: ansh },
      treasurer: { name: 'Rajat', img: rajat }
    },
    '2022-23': {
      president: { name: 'Sabya', img: sabya },
      vicePresident1: { name: 'Anubhav', img: anubhav },
      vicePresident2: { name: 'Daksh', img: daksh },
      genSec1: { name: 'Akkshita', img: akk },
      genSec2: { name: 'Ansh', img: ansh },
      treasurer: { name: 'Rajat', img: rajat }
    }
  };

  const images = [
    duality,
    acapella,
    choir,
    dhoomketu
  ];

  const currentCouncil = councilData[selectedYear];

  return (
    <div className='about'>
      <div style={{ paddingTop: '150px' }}>
        <Carousel images = {images} acts={-1}/>
      </div>

      <AboutUsCard image={noel} imagemobile={noelmobile} desc="Madhurima is a student-led society of Delhi Technological University that aims to promote and celebrate music among the student community. Madhurima provides a platform for talented musicians to showcase their skills and explore their passion for music."/>

      <div>
        <div className='council-text'>COUNCIL</div>
        <div className='year-wrapper'>
          <select 
            className='year'
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2023-24">2023-24</option>
            <option value="2022-23">2022-23</option>
          </select>
        </div>

        <div className="council-pos">PRESIDENT</div>
        <div className='card-wrapper'>
          <CouncilCard img={currentCouncil.president.img} name={currentCouncil.president.name} alt={currentCouncil.president.name} />
        </div>

        <div className="council-column">
          <div>
            <CouncilCard img={currentCouncil.vicePresident1.img} name={currentCouncil.vicePresident1.name} alt={currentCouncil.vicePresident1.name} />
          </div>
          <div className='council-pos'>VICE-PRESIDENTS</div>
          <div>
            <CouncilCard img={currentCouncil.vicePresident2.img} name={currentCouncil.vicePresident2.name} alt={currentCouncil.vicePresident2.name} />
          </div>
        </div>
        <div>
          
        </div>

        <div className="council-column">
          <div>
            <CouncilCard img={currentCouncil.genSec1.img} name={currentCouncil.genSec1.name} alt={currentCouncil.genSec1.name} />
          </div>
          <div className='council-pos'>GENERAL SECRETARIES</div>
          <div>
            <CouncilCard img={currentCouncil.genSec2.img} name={currentCouncil.genSec2.name} alt={currentCouncil.genSec2.name} />
          </div>
        </div>

        <div className="council-pos">TREASURER</div>
        <div className='card-wrapper'>
          <CouncilCard img={currentCouncil.treasurer.img} name={currentCouncil.treasurer.name} alt={currentCouncil.treasurer.name} />
        </div>
      </div>
    </div>
  )
}

export default About