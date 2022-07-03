import React, { useContext, useState } from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useTranslation } from "react-i18next";
import "../../i18n"

import { Link } from "react-router-dom";
const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(() => 
    localStorage.getItem("lang")
  )
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder={t("search.label")} />
           <SearchIcon/>
        </div>
        <div className="items">
          <div className="item lang" onClick={() => {
            if (lang==='ru'){
              changeLanguage("en")
              setLang("en")
            }
            else{
              changeLanguage("ru")
              setLang("ru")
            }
          }}>
            {/* <LanguageOutlinedIcon className='icon'/> */}
            <TranslateIcon className='icon lang'/>
             { (lang === 'ru') ? "Русский" : "English"}
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"}) }/>
          </div>
          {/* <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div> */}
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          {/* <div className="item">
            <ChatBubbleOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div> */}
          {/* <div className="item">
            <ListOutlinedIcon className="icon" />
          </div> */}
          {/* <div className="item">
            <img
              src="https://rut-miit.ru/content/e1038704.jpg?id_fe=1038704&hs=74580E778919341780B971AB6F585F7DA120EC71"
              alt=""
              className="avatar"
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar