import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import classes from './SelectPrice.module.scss'
import carStoreSelector from "../../redux/selectors/carStoreSelector";
import {addPriceMin, addPriceMax} from '../../redux/actions/carStoreAction'

export default function SelectPrice({errorState, errorFunc}) {
  const carStore = useSelector(carStoreSelector());
  const dispatch = useDispatch();
  const handleChange = (event, dispatchFunc) => {
    dispatch(errorFunc(false));
    return dispatch(dispatchFunc(event.target.value));
  }

  return(
    <div className={classes.container}>
      <label htmlFor="price">Цена, ₽</label>
      <div className={classes.inputBlock}>
        <input type="numeric" className={errorState.state ? classes.error : ""} value={carStore.priceMin} onChange={e => handleChange(e, addPriceMin)} />
        <span></span>
        <input type="numeric" value={carStore.priceMax} onChange={e => handleChange(e, addPriceMax)} />
      </div>
      <div className={classes.rangeBlock}>
        <input type="range" id="price" min="500" max="32000" value={carStore.priceMax} step="100" onChange={e => dispatch(addPriceMax(e.target.value))}/>
      </div>
      {errorState.state && <span>{errorState.text}</span>}
    </div>
  )
}

SelectPrice.propTypes = {
  errorFunc: PropTypes.func,
  errorState: PropTypes.object
}
