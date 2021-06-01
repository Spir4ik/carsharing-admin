import React from 'react';
import classes from "./Footer.module.scss";

export default function() {
  return(
    <div className={classes.container__footer}>
        <div className={classes.footer__menu}>
          <a href="#">Главная страница</a>
          <a href="#">Ссылка</a>
        </div>
        <div className={classes.footer__info}>
          <span>Copyright © 2020 Simbirsoft</span>
        </div>
    </div>
  )
}