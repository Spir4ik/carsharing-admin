import React from 'react';
import { useSelector } from "react-redux";
import classes from './commonStyles.module.scss'
import Header from "../components/header/Header.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Alert from "../components/alertCustom/Alert.jsx";
import Footer from "../components/footer/Footer.jsx";
import UserDetailsOrder from "../components/userDetails/UserDetailsOrder.jsx";
import OrderSettings from "../components/carSettings/OrderSettings.jsx";
import NotFoundPage from "../components/notFound/NotFoundPage.jsx";
import Spinner from "../components/Spinner/Spinner.jsx";
import orderStoreSelector from "../redux/selectors/orderStoreSelector";
import putOrderSelector from "../redux/selectors/putOrderSelector";
import deleteOrderSelector from "../redux/selectors/deleteOrderSelector";

export default function() {
  const order = useSelector(orderStoreSelector());
  const putStatus = useSelector(putOrderSelector());
  const statusDeleteOrder = useSelector(deleteOrderSelector());
  const renderContentBody = () => {
    if (order.hasOwnProperty("id")) {
      return(
        <>
          <UserDetailsOrder />
          <OrderSettings />
        </>
      )
    }
    return <NotFoundPage />
  }

  return(
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
        <div className={classes.content}>
          <Header />
          <Alert />
          <div className={classes.content__main}>
            {order.hasOwnProperty("id") ? <p>Карточка заказа</p> : null}
            <div className={classes.content__body}>
              {renderContentBody()}
            </div>
          </div>
          <div className={classes.footer}>
            <Footer />
          </div>
        </div>
      </div>
      {(putStatus.loading || statusDeleteOrder.loading) && <div className={classes.loading_window}>
        <div className={classes.spinner}>
          <Spinner />
        </div>
      </div>}
    </div>
  )
}
