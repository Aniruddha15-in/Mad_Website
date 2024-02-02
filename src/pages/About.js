import React from 'react'
import Carousel from '../components/Carousel'
import AboutUsCard from '../components/AboutUsCard'
import CouncilCard from '../components/CouncilCard'

import noel from "../assets/noel-about.png";

import duality from '../assets/acts/duality.jpg'

import anubhav from '../assets/council/AnubhavF-100.jpg'
import sabya from '../assets/council/SabyaF-100 1.jpg'
import daksh from '../assets/council/DakshF-100.jpg'
import akk from '../assets/council/AkkshittaF-100.jpg'
import ansh from '../assets/council/JindalF-100.png'
import rajat from '../assets/council/RajatF-100.jpg'

const About = () => {
  const images = [
    duality
  ];
  return (
    <div className='about'>
      
      <div style={{ paddingTop: '150px' }}>
        <Carousel images = {images} acts={2}/>
      </div>

    
      <AboutUsCard image={noel} desc="DoReMiPa is the official annual inter-college music competition of
          Delhi Technological University(DTU) organized by Madhurima - the
          music society of DTU, which is held under ENGIFEST- the largest
          cultural fest of north India. DoReMiPa includes six musical
          competitions that showcase a diverse array of musical styles,
          encompassing Indian, Western, and Instrumental genres and draws
          participation from all major colleges in the Delhi NCR as well as
          other parts of India. The competition is judged by professional
          musicians who are well established within their respective domains."/>

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
