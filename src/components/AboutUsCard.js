import React from 'react'
import noel from '../assets/noel-about.png'

const AboutUsCard = () => {
  return (
    <div className="about-home">
        <div style={{overflow: "hidden"}}>
          <img src={noel} />
        </div>
        <div className="content-home">
          <div style={{paddingBottom : "20px"}}>
            <p className="p1content-home">About Us</p>
          </div>
          <p className="p3content-home">
            DoReMiPa is the official annual inter-college music competition of
            Delhi Technological University(DTU) organized by Madhurima - the
            music society of DTU, which is held under ENGIFEST- the largest
            cultural fest of north India. DoReMiPa includes six musical
            competitions that showcase a diverse array of musical styles,
            encompassing Indian, Western, and Instrumental genres and draws
            participation from all major colleges in the Delhi NCR as well as
            other parts of India. The competition is judged by professional
            musicians who are well established within their respective domains.
          </p>
          <button className="but-home"><a href={`/doremipa`}>Learn More</a></button>
        </div>
      </div>
  )
}

export default AboutUsCard
