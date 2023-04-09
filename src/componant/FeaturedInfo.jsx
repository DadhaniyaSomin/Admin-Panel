import React from 'react'
import { ArrowDownward } from '@mui/icons-material'
const FeaturedInfo = ({title,total}) => {
  return (
    <div className='featured'>
       <div className="featuredItem">
          <span className='featuredTitle'> {title}</span>
          <div className='featuredMoneyContainer'>
               <span className='featuredMoney'>{total}</span>
          </div>
       </div>
    </div>
  )
}

export default FeaturedInfo
