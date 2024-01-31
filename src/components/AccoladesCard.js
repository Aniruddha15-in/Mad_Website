import React from 'react'

const AccoladesCard = ({ image, name, tag }) => {
  return (
    <div className='accoladesCard'>
      <img src={image} />
      <p className='acc-name'>{name}</p>
      <p className='acc-tag'>{tag}</p>
    </div>
  )
}

export default AccoladesCard
