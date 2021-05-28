import React from "react";
import classes from './UserDetails.module.scss'
import imageTest from '../../assets/images/image 2.jpg'

export default function() {
  return(
    <div className={classes.container}>
      <div className={classes.mainLabel}>
        <div className={classes.car__cardOrder}>
          <div className={classes.cardOrder__header}>
            <div className={classes.cardOrder__name}>
              <span>ELANTRA</span>
            </div>
            <div className={classes.cardOrder__price}>
              <span>12 000 - 25 000 ₽</span>
            </div>
          </div>
          <div className={classes.cardOrder__image}>
            <img src={imageTest} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.progress}>
        <div className={classes.color}>
          <span>Цвет: <strong>Голубой</strong></span>
        </div>
      </div>
      <div className={classes.description}>
        <div className={classes.block}>
          <span>Описание</span>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            placeholder="Введите описание ..."
          ></textarea>
        </div>
      </div>
    </div>
  )
}
