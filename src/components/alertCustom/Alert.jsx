import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import alertSelector from "../../redux/selectors/alertSelector";
import deleteCarStatus from "../../redux/selectors/deleteCarSelector";
import alertAction from "../../redux/actions/alertAction";
import classes from './Alert.module.scss';
import iconSuccessfully from '../../assets/icon-successfully.svg';
import iconClose from '../../assets/icon-close.svg';

export default function() {
  const dispatch = useDispatch();
  const alertState = useSelector(alertSelector());
  const statusCar = useSelector(deleteCarStatus()).status;
  return(
    <div className={alertState ? classes.container : `${classes.container} ${classes.close}`}>
      <div className={classes.body}>
        <div className={classes.body__icon}>
          <img src={iconSuccessfully} alt="" />
        </div>
        <div className={classes.body__text}>
          <span>Успех! Машина {statusCar === 200 ? "удалена" : "сохранена"}</span>
        </div>
      </div>
      <div className={classes.close} onClick={() => dispatch(alertAction(false))}>
        <img src={iconClose} alt="" />
      </div>
    </div>
  )
}
