import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types';
import classes from './Order.module.scss';
import imageCar from '../../assets/images/image 2.jpg';

export default function Order({orders}) {
  return(
    <div className={classes.container}>
      {orders.map(item => {
        const currentDateFrom = moment(new Date(item.dateFrom).toISOString()).format('DD.MM.YYYY HH:mm ');
        const currentDateTo = moment(new Date(item.dateTo).toISOString()).format('DD.MM.YYYY HH:mm ');
        return(
          <div className={classes.content} key={item.id}>
            <div className={classes.order__image}>
              <img src={item.carId !== null ? item.carId.thumbnail.path : imageCar} alt="" />
            </div>
            <div className={classes.order__info}>
              <div className={classes.info__title}>
                <span><strong>{item.carId !== null ? item.carId.name : "Не выбрана машина!"}</strong> в <strong>{item.cityId.name}</strong>, {item.pointId.address}</span>
              </div>
              <div className={classes.info__title}>
                <span>{currentDateFrom} — {currentDateTo}</span>
              </div>
              <div className={classes.info__title}>
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
              <button>Готово</button>
              <button>Отмена</button>
              <button>Изменить</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Order.propTypes = {
  orders: PropTypes.array
};
