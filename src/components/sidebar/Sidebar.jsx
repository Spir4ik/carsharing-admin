import React from 'react';
import {useRouteMatch, useHistory} from "react-router";
import classes from './Sidebar.module.scss';
import iconLogo from '../../assets/icon-logo.svg';
import iconCardCar from '../../assets/icon-cardCar.svg';
import iconListAuto from '../../assets/icon-listAuto.svg';
import iconOrders from '../../assets/icon-orders.svg';
import iconMenu4 from '../../assets/icon-menu4.svg';
import iconMenu5 from '../../assets/icon-menu5.svg';
import iconMenu6 from '../../assets/icon-menu6.svg';
import iconMenu7 from '../../assets/icon-menu7.svg';

export default function() {
  const match = useRouteMatch().path;
  const history = useHistory();
  return(
    <div className={classes.container}>
      <div className={classes.sidebar__header}>
        <img src={iconLogo} alt="" />
        <p>Need for car</p>
      </div>
      <div className={classes.sidebar__list}>
        <ul>
          <li onClick={() => history.push("/admin/editpage")} className={match.includes("editpage") ? classes.active : null}><img src={iconCardCar} alt="" /><span>Карточка автомобиля</span></li>
          <li onClick={() => history.push("/admin/tablecars")} className={match.includes("tablecars") ? classes.active : null}><img src={iconListAuto} alt="" /><span>Список авто</span></li>
          <li><img src={iconOrders} alt="" /><span>Заказы</span></li>
          <li><img src={iconMenu4} alt="" /><span>Menu 4</span></li>
          <li><img src={iconMenu5} alt="" /><span>Menu 5</span></li>
          <li><img src={iconMenu6} alt="" /><span>Menu 6</span></li>
          <li><img src={iconMenu7} alt="" /><span>Menu 7</span></li>
        </ul>
      </div>
    </div>
  )
}
