import React from 'react'

const AccoladesCardBig = ({image, name, tag, wins}) => {
  return (
      <div className='accoladesCard2'>
      <img src={image} className='acc-img2' />
      <div className='accHover2'>{wins}</div>
      <div>
        <p className='acc-name2'>{name}</p>
        <p className='acc-tag2'>{tag}</p>
      </div>
    </div>
  )
}

export default AccoladesCardBig
