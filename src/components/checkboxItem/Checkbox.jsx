import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import classes from './Checkbox.module.scss';

export default function Checkbox({ arrayElems, changeFunc, checkedValue, setIndex }) {
  const dispatch = useDispatch();
  return(
    <div className={classes.wrapper}>
      {arrayElems.length !== 0 ? arrayElems.map((item, index) => <div key={index} className={classes.container}>
        <input type="checkbox" id={item} name={item} onChange={() => changeFunc(setIndex ? index : item)}
               checked={checkedValue ? (checkedValue.includes(item)): true} />
        <label htmlFor={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
      </div>) : null}
    </div>
  )
}

Checkbox.propTypes = {
  arrayElems: PropTypes.array,
  changeFunc: PropTypes.func,
  checkedValue: PropTypes.string,
  setIndex: PropTypes.bool
}