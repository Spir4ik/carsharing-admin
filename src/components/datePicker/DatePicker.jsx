import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import DatePicker, {registerLocale} from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import ru from 'date-fns/locale/ru'
import orderStoreSelector from "../../redux/selectors/orderStoreSelector"
import {
  changePriceOrders, 
  changeDateFromOrders, 
  changeDateToOrders
} from "../../redux/actions/orderStoreAction";
import styleDate from './DatePicker.module.scss'

import "react-datepicker/dist/react-datepicker-cssmodules.css";

moment.locale('ru');

export default function DatePickers({dateTo, dateFrom}) {
  registerLocale('ru', ru);
  const dispatch = useDispatch();
  const order = useSelector(orderStoreSelector());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0)
  // console.log(order)
  useEffect(() => {
    const now = moment(order.dateFrom)
    const end = moment(order.dateTo)
    const duration = moment.duration(end.diff(now));
    const hours = duration.asHours();
    setHours(Math.ceil(duration.asHours()))
    if (Math.round(hours) >= 24) {
      setDays(Math.trunc(duration.asDays() + 0.01))
      setHours((Math.ceil(duration.asHours()) % 24))
    }
  }, [order.dateFrom, order.dateTo]);

  useEffect(() => {
    if (order.rateId === null) return
    switch(order.rateId.price) {
      case 1999:
        days && hours ?
            dispatch(changePriceOrders((days + 1) * 1999))
          : dispatch(changePriceOrders(days * 1999))
        break;
      case 6:
        dispatch(changePriceOrders((days * 1440 * 7) + (hours * 60 * 7)));
        break;
      case 7499:
        (days === 7) ? dispatch(changePriceOrders(7500)) : dispatch(changePriceOrders(order.price));
        break;
      default:
        dispatch(changePriceOrders(order.price));
    }
  }, [order.rateId, days, hours])

  return (
    <div className={styleDate.date}>
      <div className={styleDate.date__from}>
        <label>С</label>
        <DatePicker
          selected={new Date(dateFrom)}
          onChange={date => dispatch(changeDateFromOrders(Date.parse(date)))}
          selectsStart
          startDate={new Date(dateFrom)}
          minDate={new Date(dateFrom)}
          showTimeSelect
          disabledKeyboardNavigation
          timeFormat="p"
          timeIntervals={60}
          locale="ru"
          dateFormat="Pp"
        />
      </div>
      <div className={styleDate.date__to}>
        <label>По</label>
        <DatePicker
          selected={new Date(dateTo)}
          onChange={date => dispatch(changeDateToOrders(Date.parse(date)))}
          selectsEnd
          startDate={new Date(dateTo)}
          minDate={new Date(dateFrom)}
          showTimeSelect
          disabledKeyboardNavigation
          timeFormat="p"
          timeIntervals={60}
          locale="ru"
          dateFormat="Pp"
        />
      </div>
    </div>
  );
}

DatePickers.propTypes = {
  dateTo: PropTypes.number,
  dateFrom: PropTypes.number,
}