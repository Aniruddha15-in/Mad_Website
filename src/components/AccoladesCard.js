import React, {useState} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group';
const AccoladesCard = ({ image, name, tag, wins }) => {
  
  const [isShown, setIsShown] = useState(false);

  return (
    
    <div className='accoladesCard'>
      {/* <div 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown ? <div className='accHover'>
          <p>
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {wins}
            </ReactCSSTransitionGroup>
          </p>
        </div> : <img src={image} /> }
      </div> */}
      
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
