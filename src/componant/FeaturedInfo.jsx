import React from 'react'
import { ArrowDownward } from '@mui/icons-material'
const FeaturedInfo = () => {
  return (
    <div className='featured'>
       <div className="featuredItem">
          <span className='featuredTitle'> Reavanue</span>
          <div className='featuredMoneyContainer'>
               <span className='featuredMoney'>$100</span>
               <span className='featuredMoneyRate'>$300 <ArrowDownward /></span>
          </div>
       </div>
    </div>
  )
}

export default FeaturedInfo
