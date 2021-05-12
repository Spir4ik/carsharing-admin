import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import alertSelector from "../../redux/selectors/alertSelector";
import classes from './Alert.module.scss';
import iconSuccessfully from '../../assets/icon-successfully.svg';
import iconClose from '../../assets/icon-close.svg';

export default function() {
  const [test, setTest] = useState(true)
  const alertState = useSelector(alertSelector());

  return(
    <div className={test ? classes.container : `${classes.container} ${classes.close}`}>
      <div className={classes.body}>
        <div className={classes.body__icon}>
          <img src={iconSuccessfully} alt="" />
        </div>
        <div className={classes.body__text}>
          <span>Успех! Машина сохранена</span>
        </div>
      </div>
      <div className={classes.close} onClick={() => setTest(false)}>
        <img src={iconClose} alt="" />
      </div>
    </div>
  )
}
