import React, { useState } from 'react'


const SubCategoryCard = ({
  alt, src, link
}
) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`subcategorycard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={`subcategory ${isHovered ? 'hovered' : ''} img`} alt={alt} src={src}/>
      {isHovered && (
        <div className="overlay">
          <p className="info"><a href={link}>{link}</a></p>
        </div>
      )}
    </div>
  )
}

export default SubCategoryCard
