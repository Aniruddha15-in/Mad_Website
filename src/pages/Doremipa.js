import React from 'react'
import chester from "../assets/subcategory/Razzmatazz-100.jpg"
import ladygaga from "../assets/subcategory/Vocalicious-100.jpg"
import pentatonix from "../assets/subcategory/Balladeers-100.jpg"
import tim from "../assets/subcategory/Prelude-100.jpg"
import vrind from "../assets/subcategory/Vrind-100.jpg"
import rahman from "../assets/subcategory/Engi Idol-100.jpg"
import SubCategoryCard from '../components/SubCategoryCard'
import AboutDoremipaCard from '../components/AboutDoremipaCard'
import hero from "../assets/Doremipa-hero.jpg"

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
        <div className="div">
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
            <div className="text-wrapper-3">Prize Pool Worth</div>
            <div className="div-wrapper">
              <div className="text-wrapper-4">₹100k+</div>
            </div>
          </div>
          <div className="div-3">
            <div className="text-wrapper-3">Participating Colleges</div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">100+</div>
            </div>
          </div>
        </div>
      </div>




      <h1 style={{color: 'white', textAlign : 'center', marginBottom: "50px", fontFamily: "Manrope", fontSize: '64px', fontWeight: '600'}}>Sub-Categories</h1>

      <div className="subcategory">
        <SubCategoryCard alt = "Vocalicious" src = {ladygaga} link={`https://docs.google.com/forms/d/1bzLcU9_DJYQ645rsjy1OSYBN-T7ToTJAGjlvlM-JVos/viewform`}/>
        <SubCategoryCard alt = "Razzmatazz" src = {chester} link={`https://docs.google.com/forms/d/11lAlYqlm23_r2iRaEe4xrigzeCczQ7sz5AOm3MM7L7I/viewform`}/>
        <SubCategoryCard alt = "Balladeers" src = {pentatonix} link={`https://docs.google.com/forms/d/e/1FAIpQLScgh4g4dKUT_9mAg5eOGCqipSebarVpz2yHOoo1xq4WOkKpow/viewform`}/>
        <SubCategoryCard alt = "Prelude" src = {tim} link={`https://docs.google.com/forms/d/1tsTUzdvBI5JorIBM2dc7VjQ0tTozqo8I0k5pctps7Ms/viewform`}/>
        <SubCategoryCard alt = "Vrind" src = {vrind} link={`https://docs.google.com/forms/d/1FKvta2mzv_uG1B-qAO6XNwemvaVirSWxtHLm4CR-dQE/viewform`}/>
        <SubCategoryCard alt = "Engi Idol" src = {rahman} link={`https://docs.google.com/forms/d/e/1FAIpQLScM3WZGY9Mn0R2O32sBrcYUDTpoYxCrQlGmYZbykegkg48ttw/viewform`}/>
      </div>
    </div>
  )
}

export default Doremipa
