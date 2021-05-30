import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {changeColorOrders} from "../../redux/actions/orderStoreAction";
import orderStoreSelector from "../../redux/selectors/orderStoreSelector"
import classes from './UserDetails.module.scss';
import Checkbox from "../checkboxItem/Checkbox.jsx"

export default function() {
  const dispatch = useDispatch();
  const order = useSelector(orderStoreSelector());

  return(
    <div className={classes.container}>
      <div className={classes.mainLabel}>
        <div className={classes.car__cardOrder}>
          <div className={classes.cardOrder__header}>
            <div className={classes.cardOrder__name}>
              <span>{order.carId.name}</span>
            </div>
            <div className={classes.cardOrder__price}>
              <span>{order.carId.priceMin} - {order.carId.priceMax} ₽</span>
            </div>
          </div>
          <div className={classes.cardOrder__image}>
            <img src={`https://api-factory.simbirsoft1.com${order.carId.thumbnail.path}`} alt="" 
                 onError={(e) => { e.target.onerror = null; e.target.src = order.carId.thumbnail.path }}
            />
          </div>
        </div>
      </div>
      <div className={classes.progress}>
        <div className={classes.color}>
          <span>Цвет: <strong>{order.color ? order.color : "Не выбран цвет"}</strong></span>
        </div>
      </div>
      <div className={classes.description}>
        <div className={classes.block}>
          <span>Доступные цвета</span>
          <Checkbox
            arrayElems={order.carId.colors}
            changeFunc={item => dispatch(changeColorOrders(item))}
            checkedValue={order.color}
          />
        </div>
      </div>
    </div>
  )
}
