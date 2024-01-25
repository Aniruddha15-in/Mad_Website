import React, {useState} from 'react'


const SubCategoryCard = ({
    alt, src
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
        onMouseLeave={handleMouseLeave}>
        <img className = {`subcategory ${isHovered ? 'hovered' : ''} img`} alt = {alt} src = {src} />
        {/* {isHovered && (
        <p className="info">Additional Text on Hover</p>
      )} */}
    </div>
  )
}

export default SubCategoryCard
