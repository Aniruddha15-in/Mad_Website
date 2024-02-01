import React from 'react'

const AccoladesCard = ({ image, name, tag }) => {
  return (
    <div className='accoladesCard'>
      <img src={image} />
      <div>
        <p className='acc-name'>{name}</p>
        <p className='acc-tag'>{tag}</p>
      </div>
    </div>
  )
}

export default AccoladesCard
