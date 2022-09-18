import React from 'react'
import '../style.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
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
                  <TrendingUpIcon />
                  <p className="sidebarTag">Analytics</p>
                </li>
                <li className="sidebarListItem">
                  <TrendingUpIcon />
                  <p className="sidebarTag">Sales</p>
                </li>
            </ul>
         </div>
         <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList"> 
                <li className="sidebarListItem">
                  <DensityMediumIcon />
                  <p className="sidebarTag">Users</p>
                </li>
                <li className="sidebarListItem">
                  <TrendingUpIcon />
                  <p className="sidebarTag">Products</p>
                </li>
                <li className="sidebarListItem">
                  <TrendingUpIcon />
                  <p className="sidebarTag">Transactions</p>
                </li>
            </ul>
         </div>
         <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList"> 
                <li className="sidebarListItem">
                  <DensityMediumIcon />
                  <p className="sidebarTag">Home</p>
                </li>
                <li className="sidebarListItem">
                  <TrendingUpIcon />
                  <p className="sidebarTag">Analytics</p>
                </li>
                <li className="sidebarListItem">
                  <TrendingUpIcon />
                  <p className="sidebarTag">Sales</p>
                </li>
            </ul>
         </div>
         <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList"> 
                <li className="sidebarListItem">
                  <DensityMediumIcon />
                  <p className="sidebarTag">Home</p>
                </li>
                <li className="sidebarListItem">
                  <TrendingUpIcon />
                  <p className="sidebarTag">Analytics</p>
                </li>
                <li className="sidebarListItem">
                  <TrendingUpIcon />
                  <p className="sidebarTag">Sales</p>
                </li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Sidebar
