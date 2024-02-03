import React, {useState} from 'react'

const AccoladesCard = ({ image, name, tag, wins }) => {

  return (
    
    
    <div className='accoladesCard'>
      <img src={image} className='acc-img' />
      <div className='accHover'>{wins}</div>
      <div>
        <p className='acc-name'>{name}</p>
        <p className='acc-tag'>{tag}</p>
      </div>
    </div>
  )
}

export default AccoladesCard
