import React from 'react'


const SubCategoryCard = ({
    alt, src
} 
) => {
  return (
    <div className='subcategorycard' >
        <img className = "subcategory img" alt = {alt} src = {src} />
    </div>
  )
}

export default SubCategoryCard