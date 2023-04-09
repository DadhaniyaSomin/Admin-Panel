import React from 'react'
import '../style.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CategoryRounded from '@mui/icons-material/CategoryRounded';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
         <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashbaord</h3>
            <ul className="sidebarList"> 
                <li className="sidebarListItem">
                  <DensityMediumIcon />
                  <p className="sidebarTag">Home</p>
                </li>
                <li className="sidebarListItem">
                  <CategoryRounded />
                  <p className="sidebarTag">Blog Lists</p>
                </li>
                <li className="sidebarListItem">
                  <CategoryRounded />
                  <p className="sidebarTag">Blog Categories</p>
                </li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Sidebar
