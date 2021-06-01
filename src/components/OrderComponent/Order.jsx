import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addOrder } from "../../redux/actions/orderStoreAction";
import getPointRequest from "../../redux/thunk/getPointRequest";
import getRateRequest from "../../redux/thunk/getRateRequest";
import clearOrderStatus from "../../redux/actions/clearPutOrderStatus"
import moment from "moment";
import PropTypes from 'prop-types';
import classes from './Order.module.scss';
import noImage from '../../assets/images/no-image.png';
import iconCheck from "../../assets/icon-check.svg";
import iconEdit from "../../assets/icon-edit.svg";
import iconReject from "../../assets/icon-reject.svg";

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
      {orders.map(item => {
        const currentDateFrom = item.dateFrom ? moment(new Date(item.dateFrom).toISOString()).format('DD.MM.YYYY HH:mm ') : "Дата отсутствует";
        const currentDateTo = item.dateTo ? moment(new Date(item.dateTo).toISOString()).format('DD.MM.YYYY HH:mm ') : "Дата отсутствует";
        const renderButtons = () => {
          switch(item.orderStatusId.name) {
            case "new":
              return(
                <>
                  <button><img src={iconCheck} alt="" /><span>Готово</span></button>
                  <button><img src={iconReject} alt="" /><span>Отмена</span></button>
                  <button onClick={() => handleChangeOrder(item)}><img src={iconEdit} alt="" /><span>Изменить</span></button>
                </>
              )
            case "confirmed":
              return(
                <>
                  <button className={classes.successfully}><img src={iconCheck} alt="" /><span>Готово</span></button>
                  <button disabled ><img src={iconReject} alt="" /><span>Отмена</span></button>
                  <button disabled ><img src={iconEdit} alt="" /><span>Изменить</span></button>
                </>
              )
            case "cancelled":
              return(
                <>
                  <button disabled><img src={iconCheck} alt="" /><span>Готово</span></button>
                  <button className={classes.cancelled}><img src={iconReject} alt="" /><span>Отмена</span></button>
                  <button disabled ><img src={iconEdit} alt="" /><span>Изменить</span></button>
                </>
              )
            default:
              return(
                <>
                  <button disabled>Готово</button>
                  <button disabled>Отмена</button>
                  <button disabled >Изменить</button>
                </>
              )
          }
        }
        return(
          <>
            <div className={classes.content} key={item.id}>
              <div className={classes.order__image}>
                {item.hasOwnProperty("carId") && <img
                  src={item.carId !== null ? `https://api-factory.simbirsoft1.com${item.carId.thumbnail.path}` : noImage}
                  alt="" />}
              </div>
                <div className={classes.order__info}>
                  <div className={classes.info__title}>
                    <span>{item.hasOwnProperty("carId") && <strong>{item.carId !== null ? item.carId.name : "Не выбрана машина!"}</strong>} в <strong>{item.cityId.name}</strong>, {item.pointId !== null ? item.pointId.address : null}</span>
                  </div>
                  <div className={classes.info__date}>
                    <span>{currentDateFrom} — {currentDateTo}</span>
                  </div>
                  <div className={classes.info__color}>
                    <span>Цвет: <strong>{item.color}</strong></span>
                  </div>
                </div>
                <div className={classes.order__checkbox}>
                  <input
                    type="checkbox"
                    id="fullTank"
                    name="fullTank"
                    checked={item.isFullTank}
                    disabled
                  />
                  <label htmlFor="fullTank">Полный бак</label>

                  <input
                    type="checkbox"
                    id="babyArmchar"
                    name="babyArmchar"
                    checked={item.isNeedChildChair}
                    disabled
                  />
                  <label htmlFor="babyArmchar">Детское кресло</label>

                  <input
                    type="checkbox"
                    id="rightHandDrive"
                    name="rightHandDrive"
                    checked={item.isRightWheel}
                    disabled
                  />
                  <label htmlFor="rightHandDrive">Правый руль</label>

                </div>
                <div className={classes.order__price}>
                  <span>{item.price} ₽</span>
                </div>
                <div className={classes.order__buttons}>
                  {renderButtons()}
                </div>
            </div>


            <div className={classes.content__phone}>
              <div className={classes.image}>
                {item.hasOwnProperty("carId") && <img
                  src={item.carId !== null ? `https://api-factory.simbirsoft1.com${item.carId.thumbnail.path}` : noImage}
                  alt="" />}
              </div>
              <div className={classes.mainInfo}>
                <div className={classes.order__info}>
                  <div className={classes.info__title}>
                    <span>{item.hasOwnProperty("carId") && <strong>{item.carId !== null ? item.carId.name : "Не выбрана машина!"}</strong>} в <strong>{item.cityId.name}</strong>, {item.pointId !== null ? item.pointId.address : null}</span>
                  </div>
                  <div className={classes.info__date}>
                    <span>{currentDateFrom} — {currentDateTo}</span>
                  </div>
                  <div className={classes.info__color}>
                    <span>Цвет: <strong>{item.color}</strong></span>
                  </div>
                </div>
                <div className={classes.checkbox}>
                  <input
                    type="checkbox"
                    id="fullTank"
                    name="fullTank"
                    checked={item.isFullTank}
                    disabled
                  />
                  <label htmlFor="fullTank">Полный бак</label>

                  <input
                    type="checkbox"
                    id="babyArmchar"
                    name="babyArmchar"
                    checked={item.isNeedChildChair}
                    disabled
                  />
                  <label htmlFor="babyArmchar">Детское кресло</label>

                  <input
                    type="checkbox"
                    id="rightHandDrive"
                    name="rightHandDrive"
                    checked={item.isRightWheel}
                    disabled
                  />
                  <label htmlFor="rightHandDrive">Правый руль</label>

                </div>
                <div className={classes.footer}>
                  <div className={classes.order__price}>
                    <span>{item.price} ₽</span>
                  </div>
                  <div className={classes.buttons}>
                    {renderButtons()}
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

Order.propTypes = {
  orders: PropTypes.array
};
