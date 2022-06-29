import React from 'react'
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
  QueryStats,
  NotificationsNone,
  HeartBroken,
  Psychology,
  Settings,
  Person,
  Logout
} from '@mui/icons-material';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">ГЛАВНАЯ</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <Dashboard className='icon'/>
            <span>Главная</span>
          </li>
          </Link>
          <p className="title">СПРАВОЧНИКИ</p>
          <Link to="/sources" style={{ textDecoration: "none" }}>
          <li>
          <Source className='icon'/>
            <span>Источники</span>
          </li>
          </Link>
          <li>
          <Inventory className='icon'/>
            <span>Ресурсы</span>
          </li>
          <li>
          <CollectionsBookmark className='icon'/>
            <span>Группы ресурсов </span>
          </li>
          <li>
          <Info className='icon'/>
            <span>Статусы</span>
          </li>
          <p className="title">ПОЛЕЗНОЕ</p>
          <li>
          <QueryStats className='icon'/>
            <span>Статистика</span>
          </li>
          <li>
          <NotificationsNone className='icon'/>
            <span>Уведомления</span>
          </li>
          <p className="title">СЕРВИСЫ</p>
          <li>
          <HeartBroken className='icon'/>
            <span>Состояние системы</span>
          </li>
          <li>
          <Psychology className='icon'/>
            <span>Логи</span>
          </li>
          <li>
          <Settings className='icon'/>
            <span>Настройки</span>
          </li>
          <p className="title">ПОЛЬЗОВАТЕЛЬ</p>
          <li>
          <Person className='icon'/>
            <span>Профиль</span>
          </li>
          <li>
          <Logout className='icon'/>
            <span>Выход</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div> */}
    </div>
  )
}

export default Sidebar