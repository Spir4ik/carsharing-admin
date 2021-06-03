import React from 'react';
import PropTypes from 'prop-types';
import classes from "./Order.module.scss";
import RenderButtons from "./RenderButtons.jsx";
import noImage from '../../assets/images/no-image.png';

export default function MobileVersion({item, currentDateFrom, currentDateTo, handleChangeOrder}) {
  return(
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
              <RenderButtons item={item} handleChangeOrder={handleChangeOrder}/>
            </div>
        </div>
      </div>
    </div>
  )
}

MobileVersion.propTypes = {
  item: PropTypes.object,
  currentDateFrom: PropTypes.string,
  currentDateTo: PropTypes.string,
  handleChangeOrder: PropTypes.func
}