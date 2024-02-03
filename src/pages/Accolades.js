import React from 'react'
import AccoladesCard from '../components/AccoladesCard'
import { westernSolos, indianSolos, instrumental, band, acapella } from '../utils/data';

const Accolades = () => {
  return (
    <div className='accolades'>
      
      <p className='acc-heading'>ACCOLADES</p>

      <div className='card-section'>
        <p className='heading-cardsec'>WESTERN SOLOS 2022-23</p>
        <div className='cards-container'>
          {westernSolos.map((person) => (
            <AccoladesCard image={person.image} name={person.name} tag={person.tag} wins={person.wins}/>
          ))}
        </div>
      </div>

      <div className='card-section'>
        <p className='heading-cardsec'>INDIAN SOLOS 2022-23</p>
        <div className='cards-container'>
          {indianSolos.map((person) => (
            <AccoladesCard image={person.image} name={person.name} tag={person.tag} wins={person.wins}/>
          ))}
        </div>
      </div>

      <div className='card-section'>
        <p className='heading-cardsec'>INSTRUMENTAL SOLOS 2022-23</p>
        <div className='cards-container'>
          {instrumental.map((person) => (
            <AccoladesCard image={person.image} name={person.name} tag={person.tag} wins={person.wins}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accolades
