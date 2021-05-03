import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import classes from './SelectPrice.module.scss'
import carStoreSelector from "../../redux/selectors/carStoreSelector";
import {addPriceMin, addPriceMax} from '../../redux/actions/carStoreAction'

export default function() {
  const carStore = useSelector(carStoreSelector());
  const dispatch = useDispatch()

  return(
    <div className={classes.container}>
      <label htmlFor="price">Цена, ₽</label>
      <div className={classes.inputBlock}>
        <input type="numeric" value={carStore.priceMin} onChange={e => dispatch(addPriceMin(e.target.value))}/>
        <span></span>
        <input type="numeric" value={carStore.priceMax} onChange={e => dispatch(addPriceMax(e.target.value))}/>
      </div>
      <div className={classes.rangeBlock}>
        <input type="range" id="price" min="500" max="32000" value={carStore.priceMax} step="100" onChange={e => dispatch(addPriceMax(e.target.value))}/>
      </div>
    </div>
  )
}
