import React from 'react'
import noel from '../assets/noel-about.png'

const AboutUsCard = ({image, desc, check}) => {
  return (
    <div className="about-home">
        <div style={{overflow: "hidden"}}>
          <img src={image} />
        </div>
        <div className="content-home">
          <div style={{paddingBottom : "20px"}}>
            <p className="p1content-home">About {check ? <p className='p2content-home'>DoReMiPa</p> : "Us"}</p>
          </div>
          <p className="p3content-home">
            {desc}
          </p>
          <button className="but-home"><a href={`/doremipa`}>Learn More</a></button>
        </div>
      </div>
  )
}

export default AboutUsCard
