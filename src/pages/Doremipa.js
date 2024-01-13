import React from 'react'
import chester from "../assets/Razzmatazz-100.jpg"
import ladygaga from "../assets/Vocalicious-100.jpg"
import pentatonix from "../assets/Balladeers-100.jpg"
import tim from "../assets/Prelude-100.jpg"
import vrind from "../assets/Vrind-100.jpg"
import rahman from "../assets/Engi Idol-100.jpg"
import SubCategoryCard from '../components/SubCategoryCard'

const Doremipa = () => {
  return (
    <div className='Doremipa'>
      <h1 style={{color: 'white', textAlign : 'center', margin: 0, fontFamily: "Inter", fontSize: '64px'}}>Sub-Categories</h1>

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
