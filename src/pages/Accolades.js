import React from 'react'
import AccoladesCard from '../components/AccoladesCard'
import { westernSolos, indianSolos, instrumental, band, acapella } from '../utils/data';

const Accolades = () => {
  return (
    <div className='accolades'>
      
      <div className='western-solos'>
        {westernSolos.map((person) => (
          <AccoladesCard image={person.image} name={person.name} tag={person.tag}/>
        ))}
      </div>

      <div className='indian-solos'>
        {indianSolos.map((person) => (
          <AccoladesCard image={person.image} name={person.name} tag={person.tag}/>
        ))}
      </div>

      <div className='instrumental-solos'>
        {instrumental.map((person) => (
          <AccoladesCard image={person.image} name={person.name} tag={person.tag}/>
        ))}
      </div>

      <div className='band-wins'>
        {band.map((person) => (
          <AccoladesCard image={person.image} name={person.name} tag={person.tag}/>
        ))}
      </div>

      <div className='acapella-wins'>
        {acapella.map((person) => (
          <AccoladesCard image={person.image} name={person.name} tag={person.tag}/>
        ))}
      </div>
    </div>
  )
}

export default Accolades
