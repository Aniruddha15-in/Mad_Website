import React from 'react'
import AccoladesCard from '../components/AccoladesCard'
import { westernSolos, indianSolos, instrumental, band, group } from '../utils/data';
import AccoladesCardBig from '../components/AccoladesCardBig';

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

      <div className='card-section'>
        <p className='heading-cardsec'>BAND WINS 2022-23</p>
        <div className='cards-container'>
          {band.map((person) => (
            <AccoladesCardBig image={person.image} name={person.name} tag={person.tag} wins={person.wins}/>
          ))}
        </div>
      </div>

      <div className='card-section'>
        <p className='heading-cardsec'>ACAPELLA AND INDIAN CHOIR WINS 2022-23</p>
        <div className='cards-container'>
          {group.map((person) => (
            <AccoladesCardBig image={person.image} name={person.name} tag={person.tag} wins={person.wins}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accolades
