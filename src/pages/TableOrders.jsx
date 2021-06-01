import React from 'react';
import classes from './commonStyles.module.scss';
import Header from "../components/header/Header.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import OrderList from "../components/topReferrals/OrderList.jsx";
import Footer from "../components/footer/Footer.jsx";

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
          <div className={classes.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
