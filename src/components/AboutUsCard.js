import React from 'react'

const AboutUsCard = ({image, desc, check}) => {
  return (
    <div className="about-home">
        <div className="img-wrapper"style={{overflow: "hidden"}}>
          <img src={image} alt='about'/>
        </div>
        <div className="content-home">
          <div style={{paddingBottom : "2vw"}}>
            <p className="p1content-home">About {check ? <p className='p2content-home'>DoReMiPa</p> : "Us"}</p>
          </div>
          <p className="p3content-home">
            {desc}
          </p>
          <button className="but-home"><a href={`/doremipa`}>Register Now</a></button>
        </div>
      </div>
  )
}

export default AboutUsCard
