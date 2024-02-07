import React from 'react'
import chester from "../assets/subcategory/Razzmatazz-100.jpg"
import ladygaga from "../assets/subcategory/Vocalicious-100.jpg"
import pentatonix from "../assets/subcategory/Balladeers-100.jpg"
import tim from "../assets/subcategory/Prelude-100.jpg"
import vrind from "../assets/subcategory/Vrind-100.jpg"
import rahman from "../assets/subcategory/Engi Idol-100.jpg"
import SubCategoryCard from '../components/SubCategoryCard'
import hero from "../assets/Doremipa-hero.jpg"

import sponsor1 from "../assets/sponsor-logo1.png";
import sponsor2 from "../assets/sponsor-logo2.png";
import sponsor3 from "../assets/sponsor-logo3.png";
import sponsor4 from "../assets/sponsor-logo4.png";
import sponsor5 from "../assets/sponsor-logo5.png";

const Doremipa = () => {
  return (
    <div className='Doremipa'>
      <div className="hero-doremipa">
        <img src={hero} alt="Doremipa Hero" />
        <div className="about-doremipa-sec">
          <div className="group">
            <div className="div">
              <div className="text-1">About Us</div>
              <p className="p">
  DoReMiPa includes six musical competitions that showcase a diverse array of musical styles, encompassing Indian, Western, and Instrumental genres and draws participation from all major colleges in the Delhi NCR as well as other parts of India.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="frame">

        <div className="div-2">
          <div className="text-wrapper">No. of Participants</div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">500+</div>
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper">Footfall</div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">3000+</div>
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper">Prize Pool Worth</div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">₹100k+</div>
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper">Participating Colleges</div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">100+</div>
          </div>
        </div>

      </div>




      <h1 className="subCat">Sub-Categories</h1>

      <div className="subcategory">
        <SubCategoryCard alt="Vocalicious" src={ladygaga} link={`https://docs.google.com/forms/d/1bzLcU9_DJYQ645rsjy1OSYBN-T7ToTJAGjlvlM-JVos/viewform`} />
        <SubCategoryCard alt="Razzmatazz" src={chester} link={`https://docs.google.com/forms/d/11lAlYqlm23_r2iRaEe4xrigzeCczQ7sz5AOm3MM7L7I/viewform`} />
        <SubCategoryCard alt="Balladeers" src={pentatonix} link={`https://docs.google.com/forms/d/e/1FAIpQLScgh4g4dKUT_9mAg5eOGCqipSebarVpz2yHOoo1xq4WOkKpow/viewform`} />
        <SubCategoryCard alt="Prelude" src={tim} link={`https://docs.google.com/forms/d/1tsTUzdvBI5JorIBM2dc7VjQ0tTozqo8I0k5pctps7Ms/viewform`} />
        <SubCategoryCard alt="Vrind" src={vrind} link={`https://docs.google.com/forms/d/1FKvta2mzv_uG1B-qAO6XNwemvaVirSWxtHLm4CR-dQE/viewform`} />
        <SubCategoryCard alt="Engi Idol" src={rahman} link={`https://docs.google.com/forms/d/e/1FAIpQLScM3WZGY9Mn0R2O32sBrcYUDTpoYxCrQlGmYZbykegkg48ttw/viewform`} />
      </div>


      <div className="sponsors">
        <p className="content-sponsors">Past Sponsors</p>
        <div className="current-sponsors">
          <img src={sponsor1} alt="sponsor1" className="current-sponsor" />
          <img src={sponsor2} alt="sponsor2" className="current-sponsor" />
          <img src={sponsor3} alt="sponsor3" className="current-sponsor" />
          <img src={sponsor4} alt="sponsor4" className="current-sponsor" />
          <img src={sponsor5} alt="sponsor5" className="current-sponsor" />
        </div>
      </div>
    </div>
  )
}

export default Doremipa
