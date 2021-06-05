import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import classes from './CarSettings.module.scss'
import Select from "../selectComp/Select.jsx";
import DatePicker from "../datePicker/DatePicker.jsx";
import {
  changeCityOrders, 
  changePointOrders, 
  changeTankOrders,
  changeChairOrders,
  changeWheelOrders,
  changeRateOrders,
  changeStatus,
  clearOrderStore
} from "../../redux/actions/orderStoreAction";
import getPointRequest from "../../redux/thunk/getPointRequest";
import putOrderRequest from "../../redux/thunk/putOrderRequest";
import deleteOrderRequest from "../../redux/thunk/deleteOrderRequest"
import orderStoreSelector from "../../redux/selectors/orderStoreSelector"
import getPointSelector from "../../redux/selectors/getPointSelector"
import getCitiesSelector from "../../redux/selectors/getCitiesSelector";
import getRateSelector from "../../redux/selectors/getRateSelector";
import putOrderSelector from "../../redux/selectors/putOrderSelector";
import getOrderStatusSelector from "../../redux/selectors/getOrderStatusSelector";
import deleteOrderSelector from "../../redux/selectors/deleteOrderSelector";

export default function() {
  const order = useSelector(orderStoreSelector());
  const currentPoint = useSelector(getPointSelector()).point;
  const cities = useSelector(getCitiesSelector()).cities;
  const rates = useSelector(getRateSelector()).rates;
  const orderStatusArray = useSelector(getOrderStatusSelector()).orderStatus;
  const statusDeleteOrder = useSelector(deleteOrderSelector()).status;
  const putStatus = useSelector(putOrderSelector());
  const dispatch = useDispatch();

  useEffect(() => dispatch(getPointRequest(order.cityId.id)), [order.cityId]);
  useEffect(() => {
    if (putStatus.status === 200 || statusDeleteOrder === 200) dispatch(clearOrderStore())
  }, [putStatus.status, statusDeleteOrder])
  
  return(
    <div className={classes.container}>
      <div className={classes.header}>
        <span>Настройки заказа</span>
      </div>
      <div className={classes.body}>
        <div>
          <form>
            <Select
              label="Выбранный город"
              currentArray={cities}
              currentFunc={changeCityOrders}
              value={order.cityId.name}
            />
            <Select
              label="Выбранный адрес"
              currentArray={currentPoint}
              currentFunc={changePointOrders}
              optionName="Выберите адрес"
              value={order.pointId !== null ? order.pointId.address : null}
            />
          </form>
          <div className={classes.body__param + " " + classes.body__paramOrder}>
            <div className={classes.paramOrder__date}>
              <label>Выбранная дата</label>
              <DatePicker 
                dateFrom={order.dateFrom}
                dateTo={order.dateTo}
              />
            </div>
            <Select
              label="Выбранный тариф"
              currentArray={rates}
              currentFunc={changeRateOrders}
              value={order?.rateId && order.rateId !== null ? order.rateId.rateTypeId.name : ""}
            />
            <Select
              label="Текущий статус"
              currentArray={orderStatusArray}
              currentFunc={changeStatus}
              value={order.orderStatusId !== null ? order.orderStatusId.name : ""}
            />
            <div className={classes.paramOrder__checkbox}>
              <label>Доп. услуги</label>
              <div className={classes.container__checkbox}>
                <input 
                  type="checkbox" 
                  id="tank" 
                  name="tank"
                  onChange={() => dispatch(changeTankOrders())}
                  checked={order.isFullTank ? order.isFullTank : false} 
                />
                <label htmlFor="tank">Полный бак</label>
              </div>
              <div className={classes.container__checkbox}>
                <input 
                  type="checkbox" 
                  id="chair" 
                  name="chair"
                  onChange={() => dispatch(changeChairOrders())}
                  checked={order.isNeedChildChair ? order.isNeedChildChair : false} 
                />
                <label htmlFor="chair">Детское кресло</label>
              </div>
              <div className={classes.container__checkbox}>
                <input 
                  type="checkbox" 
                  id="wheel" 
                  name="wheel"
                  onChange={() => dispatch(changeWheelOrders())}
                  checked={order.isRightWheel ? order.isRightWheel : false} 
                />
                <label htmlFor="wheel">Правый руль</label>
              </div>
            </div>
            <div className={classes.paramOrder__price}>
              <div>
                <span>Цена: <strong>{order.price}</strong></span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.btn__lineBlock}>
          <div className={classes.btn__groupe}>
            <button onClick={() => dispatch(putOrderRequest(order, order.id))}>Сохранить</button>
            <button onClick={() => dispatch(clearOrderStore())}>Отменить</button>
          </div>
          <div className={classes.btn__delete}>
            <button onClick={() => dispatch(deleteOrderRequest(order, order.id))}>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
