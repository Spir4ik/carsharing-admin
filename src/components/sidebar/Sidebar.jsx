import React from 'react';
import {useRouteMatch, useHistory} from "react-router";
import PropTypes from 'prop-types';
import classes from './Sidebar.module.scss';
import iconLogo from '../../assets/icon-logo.svg';
import iconCardCar from '../../assets/icon-cardCar.svg';
import iconListAuto from '../../assets/icon-listAuto.svg';
import iconOrders from '../../assets/icon-orders.svg';
import iconMenu4 from '../../assets/icon-menu4.svg';

export default function Sidebar({showSidebar}) {
  const match = useRouteMatch().path;
  const history = useHistory();
  const sideBarPhone = showSidebar ? classes.sidebar__show : ""
  return(
    <div className={classes.container + " " + sideBarPhone}>
      <div className={classes.sidebar__header + " " + sideBarPhone}>
        <img src={iconLogo} alt="" />
        <p>Need for car</p>
      </div>
      <div className={classes.sidebar__list + " " + sideBarPhone}>
        <ul>
          <li onClick={() => history.push("/admin/editpage")} className={match.includes("editpage") ? classes.active : null}><img src={iconCardCar} alt="" /><span>Карточка автомобиля</span></li>
          <li onClick={() => history.push("/admin/tablecars")} className={match.includes("tablecars") ? classes.active : null}><img src={iconListAuto} alt="" /><span>Список авто</span></li>
          <li onClick={() => history.push("/admin/tableorders")} className={match.includes("tableorders") ? classes.active : null}><img src={iconOrders} alt="" /><span>Список заказов</span></li>
          <li onClick={() => history.push("/admin/editorder")} className={match.includes("editorder") ? classes.active : null}><img src={iconMenu4} alt="" /><span>Карточка заказа</span></li>
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  showSidebar: PropTypes.bool
};
