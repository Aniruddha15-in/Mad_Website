import React from 'react'
import chester from "../assets/Razzmatazz-100.jpg"
import ladygaga from "../assets/Vocalicious-100.jpg"
import pentatonix from "../assets/Balladeers-100.jpg"
import tim from "../assets/Prelude-100.jpg"
import vrind from "../assets/Vrind-100.jpg"
import rahman from "../assets/Engi Idol-100.jpg"
import SubCategoryCard from '../components/SubCategoryCard'
import AboutDoremipaCard from '../components/AboutDoremipaCard'
import hero from "../assets/Doremipa-hero.jpg"

const Doremipa = () => {
  return (
    <div className='Doremipa'>
      <div className="hero-doremipa">
        <img src={hero} alt="Doremipa Hero" />
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




      <h1 style={{color: 'white', textAlign : 'center', marginBottom: "100px", fontFamily: "Manrope", fontSize: '64px', fontWeight: '600'}}>Sub-Categories</h1>

      <div className="subcategory">
        <SubCategoryCard alt = "Vocalicious" src = {ladygaga}/>
        <SubCategoryCard alt = "Razzmatazz" src = {chester}/>
        <SubCategoryCard alt = "Balladeers" src = {pentatonix}/>
        <SubCategoryCard alt = "Prelude" src = {tim}/>
        <SubCategoryCard alt = "Vrind" src = {vrind}/>
        <SubCategoryCard alt = "Engi Idol" src = {rahman}/>
      </div>
    </div>
  )
}

export default Doremipa
