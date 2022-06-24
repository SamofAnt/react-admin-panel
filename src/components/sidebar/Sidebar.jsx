import React from 'react'
import "./sidebar.scss"
import {
  Dashboard,
  PersonOutline,
  Inventory,
  CreditCard,
  LocalShipping,
  QueryStats,
  NotificationsNone,
  HeartBroken,
  Psychology,
  Settings,
  Person,
  Logout
} from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
          <PersonOutline className='icon'/>
            <span>Users</span>
          </li>
          <li>
          <Inventory className='icon'/>
            <span>Products</span>
          </li>
          <li>
          <CreditCard className='icon'/>
            <span>Orders</span>
          </li>
          <li>
          <LocalShipping className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
          <QueryStats className='icon'/>
            <span>Stats</span>
          </li>
          <li>
          <NotificationsNone className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
          <HeartBroken className='icon'/>
            <span>System Health</span>
          </li>
          <li>
          <Psychology className='icon'/>
            <span>Logs</span>
          </li>
          <li>
          <Settings className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
          <Person className='icon'/>
            <span>Profile</span>
          </li>
          <li>
          <Logout className='icon'/>
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar