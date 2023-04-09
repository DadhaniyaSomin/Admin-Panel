import React from 'react'
import '../style.css';
import {Link} from 'react-router-dom'
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
                    <Link to="/"><p className="sidebarTag" >Home</p></Link>
                  </li>
                
                <li className="sidebarListItem">
                  <CategoryRounded />
                  <Link to="/blog"><p className="sidebarTag" > Blogs</p></Link>
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
