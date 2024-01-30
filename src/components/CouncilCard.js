import React from 'react'

const CouncilCard = ({alt, img, name}) => {
  return (
    <div className='council-card'>
      <div className="group">
        <img className='council-img' alt = {alt} src={img} />
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="council-name">{name}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouncilCard
