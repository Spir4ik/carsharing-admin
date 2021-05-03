import React from 'react'
import classes from './Header.module.scss'
import imgAvatar from '../../assets/images/Avatar.jpg'
import iconNotification from '../../assets/icon-notification.svg'
import iconDropdown from '../../assets/icon-dropdown.svg'
import iconSearch from '../../assets/icon-search.svg'

export default function() {
  return(
    <div className={classes.container}>
      <div className={classes.header__search}>
        <img src={iconSearch} alt="" />
        <input type="text" placeholder="Поиск ..." />
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
  )
}
