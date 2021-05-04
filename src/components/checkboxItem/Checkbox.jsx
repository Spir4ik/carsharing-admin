import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import classes from './Checkbox.module.scss';
import {deleteColor} from '../../redux/actions/carStoreAction'
import carStoreSelector from "../../redux/selectors/carStoreSelector";

export default function() {
  const dispatch = useDispatch();
  const carStore = useSelector(carStoreSelector());
  return(
    <div className={classes.wrapper}>
      {carStore.colors.length !== 0 ? carStore.colors.map((item, index) => <div key={index} className={classes.container}>
        <input type="checkbox" id={item} name={item} onChange={() => dispatch(deleteColor(index))}
               checked />
        <label htmlFor={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
      </div>) : null}
    </div>
  )
}
