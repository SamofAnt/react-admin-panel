import { useContext, useEffect, useState } from 'react'
import "./sidebar.scss"
import {
  Dashboard,
  PersonOutline,
  Source,
  Inventory,
  CreditCard,
  CollectionsBookmark,
  LocalShipping,
  Info,
  AppRegistrationOutlined,
  QueryStats,
  NotificationsNone,
  HeartBroken,
  Psychology,
  Settings,
  Person,
  Logout
} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';
import { useTranslation } from "react-i18next";
import "../../i18n"
import React from 'react'

const Sidebar = () => {
  const { t } = useTranslation();
  const { dispatch } = useContext(DarkModeContext)
  const [active, setActive] = useState(
    () =>
    JSON.parse(localStorage.getItem("active")) 
  );

  useEffect(() => { 
    window.localStorage.setItem("active", JSON.stringify(active));
  }, [active]);

  useEffect(() => {
    console.log('active', active)
  }, [active])
  return (
    <div className='sidebar'>
      <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">Admin Panel</span>
      </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">{t("sidebar.main")}</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Dashboard className='icon' />
              <span>{t("sidebar.dashboard")}</span>
            </li>
          </Link>
          <p className="title">{t("sidebar.lists")}</p>
          <Link to="/sources" style={{ textDecoration: "none" }}>
            <li>
              <Source className='icon' />
              <span>{t("sidebar.sources")}</span>
            </li>
          </Link>
          <Link to="/resources" style={{ textDecoration: "none" }}>
          <li>
            <Inventory className='icon' />
            <span>{t("sidebar.resources")}</span>
          </li>
          </Link>
          <Link to="/group" style={{ textDecoration: "none" }}>
          <li>
            <CollectionsBookmark className='icon' />
            <span>{t("sidebar.groupResources")}</span>
          </li>
          </Link>
          <Link to="/resourcesx" style={{ textDecoration: "none" }}>
          <li>
            <Info className='icon' />
            <span>{t("sidebar.resoucesx")}</span>
          </li>
          </Link>
          <Link to="/registers" style={{ textDecoration: "none" }}>
          <li>
            <AppRegistrationOutlined className='icon' />
            <span>{t("sidebar.registers")}</span>
          </li>
          </Link>
          <p className="title">{t("sidebar.useful")}</p>
          <li>
            <QueryStats className='icon' />
            <span>{t("sidebar.stats")}</span>
          </li>
          <li>
            <NotificationsNone className='icon' />
            <span>{t("sidebar.notifications")}</span>
          </li>
          <p className="title">{t("sidebar.services")}</p>
          <li>
            <HeartBroken className='icon' />
            <span>{t("sidebar.systemHealth")}</span>
          </li>
          <li>
            <Psychology className='icon' />
            <span>{t("sidebar.logs")}</span>
          </li>
          <li>
            <Settings className='icon' />
            <span>{t("sidebar.settings")}</span>
          </li>
          <p className="title">{t("sidebar.user")}</p>
          <li>
            <Person className='icon' />
            <span>{t("sidebar.profile")}</span>
          </li>
          <li>
            <Logout className='icon' />
            <span>{t("sidebar.exit")}</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className={active ? 'toggle active' : 'toggle'} onClick={() => {
          dispatch({ type: "TOGGLE" })
          setActive(!active)
        }
        }>
          <i className="indicator"></i>
        </div>
        {/* <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div> */}
      </div>
    </div>
  )
}

export default Sidebar