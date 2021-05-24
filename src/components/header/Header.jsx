import React, { useState } from "react";
import classes from './Header.module.scss';
import Sidebar from "../sidebar/Sidebar.jsx";
import imgAvatar from '../../assets/images/Avatar.jpg';
import iconNotification from '../../assets/icon-notification.svg';
import iconDropdown from '../../assets/icon-dropdown.svg';
import iconSearch from '../../assets/icon-search.svg';

export default function() {
  const [showMenuBack, setShowMenuBack] = useState(false);
  return(
    <>
      <div className={classes.container}>
        <div className={classes.header__search}>
          <div className={classes.search__headerPhone}>
            <input className={classes.toggle} id="menu__toggle" type="checkbox"
                   onChange={() => setShowMenuBack(!showMenuBack)}
            />
            <label className={classes.menu__btn} htmlFor="menu__toggle">
              <span></span>
            </label>
          </div>
          <div className={classes.search__input}>
            <img src={iconSearch} alt="" />
            <input type="text" placeholder="Поиск ..." />
          </div>
        </div>
        <div className={classes.header__profile}>
          <div className={classes.profile__notification}>
            <img src={iconNotification} alt="" />
          </div>
          <div className={classes.profile__block}>
            <div className={classes.block__info}>
              <div className={classes.block__avatar}>
                <img src={imgAvatar} alt="" />
              </div>
              <div className={classes.block__name}>
                <span>Admin</span>
              </div>
            </div>
            <div className={classes.block__dropdown}>
              <img src={iconDropdown} alt="" />
            </div>
          </div>
        </div>
      </div>
      {showMenuBack && <div className={classes.sidebar__phone}>
        <div className={classes.sidebar__phoneSearch}>
          <img src={iconSearch} alt="" />
          <input type="text" placeholder="Поиск ..." />
        </div>
        <div className={classes.sidebar__navigation}>
          <Sidebar showSidebar={true} />
        </div>
      </div>}
    </>
  )
}
