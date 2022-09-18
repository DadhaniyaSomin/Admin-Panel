import React from 'react'
import '../style.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ForumIcon from '@mui/icons-material/Forum';
import ReportIcon from '@mui/icons-material/Report';
import BarChartIcon from '@mui/icons-material/BarChart';
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
                  <PeopleAltIcon />
                  <p className="sidebarTag">Users</p>
                </li>
                <li className="sidebarListItem">
                  <ProductionQuantityLimitsIcon />
                  <p className="sidebarTag">Products</p>
                </li>
                <li className="sidebarListItem">
                  <ReceiptLongIcon />
                  <p className="sidebarTag">Transactions</p>
                </li>
            </ul>
         </div>
         <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList"> 
                <li className="sidebarListItem">
                  <AttachEmailIcon />
                  <p className="sidebarTag">Mail</p>
                </li>
                <li className="sidebarListItem">
                  <DynamicFeedIcon />
                  <p className="sidebarTag">Feedback</p>
                </li>
                <li className="sidebarListItem">
                  <ForumIcon />
                  <p className="sidebarTag">Messages</p>
                </li>
            </ul>
         </div>
         <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList"> 
                <li className="sidebarListItem">
                  <ManageAccountsIcon />
                  <p className="sidebarTag">Manage</p>
                </li>
                <li className="sidebarListItem">
                  <BarChartIcon />
                  <p className="sidebarTag">Analytics</p>
                </li>
                <li className="sidebarListItem">
                  <ReportIcon />
                  <p className="sidebarTag">Reports</p>
                </li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Sidebar
