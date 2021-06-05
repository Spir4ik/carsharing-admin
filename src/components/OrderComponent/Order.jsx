import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addOrder } from "../../redux/actions/orderStoreAction";
import getPointRequest from "../../redux/thunk/getPointRequest";
import getRateRequest from "../../redux/thunk/getRateRequest";
import clearOrderStatus from "../../redux/actions/clearOrderStatus"
import classes from './Order.module.scss';
import DesktopVersion from "./DesktopVersion.jsx";
import MobileVersion from "./MobileVersion.jsx";

export default function Order({orders}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChangeOrder = item => {
    dispatch(clearOrderStatus())
    dispatch(getPointRequest(item.cityId.id))
    dispatch(getRateRequest())
    dispatch(addOrder(item))
    history.push("/admin/editorder")
  }
  
  return(
    <div className={classes.container}>
      {orders.map((item, index) => {
        const currentDateFrom = item.dateFrom ? moment(new Date(item.dateFrom).toISOString()).format('DD.MM.YYYY HH:mm ') : "Дата отсутствует";
        const currentDateTo = item.dateTo ? moment(new Date(item.dateTo).toISOString()).format('DD.MM.YYYY HH:mm ') : "Дата отсутствует";
        return(
          <React.Fragment key={index}>
            <DesktopVersion 
              item={item} 
              currentDateTo={currentDateTo} 
              currentDateFrom={currentDateFrom} 
              handleChangeOrder={handleChangeOrder} 
            />
            <MobileVersion 
              item={item} 
              currentDateTo={currentDateTo} 
              currentDateFrom={currentDateFrom} 
              handleChangeOrder={handleChangeOrder} 
            />
          </React.Fragment>
        )
      })}
    </div>
  )
}

Order.propTypes = {
  orders: PropTypes.array
};
