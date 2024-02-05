import React from 'react';
import useWindowDimensions from "../utils/windowdimensions";

const AboutUsCard = ({image, imagemobile, desc, check}) => {
  const {width} = useWindowDimensions();
  return (
    <div className="about-home">
        <div className="img-wrapper"style={{overflow: "hidden"}}>
          {width>=800?
          (<img src={image} alt='about'/>):
          (<img src={imagemobile} alt='about-mobile'/>)
          }
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
