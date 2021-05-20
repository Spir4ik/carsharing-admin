import React from 'react';
import classes from './commonStyles.module.scss';
import Header from "../components/header/Header.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import OrderList from "../components/topReferrals/OrderList.jsx";

export default function() {
  return(
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
        <div className={classes.content}>
          <Header />
          <div className={classes.content__main}>
            <p>Заказы</p>
            <div className={classes.content__body}>
              <OrderList />
            </div>
          </div>
          <div className={classes.content__footer}>
            <div className={classes.footer__menu}>
              <a href="#">Главная страница</a>
              <a href="#">Ссылка</a>
            </div>
            <div className={classes.footer__info}>
              <span>Copyright © 2020 Simbirsoft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
