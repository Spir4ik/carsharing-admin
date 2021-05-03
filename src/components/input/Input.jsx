import React from 'react'
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import classes from './Input.module.scss'

export default function Input({id, isType, isLabel, currentSelector, currentDispatch, stateFunc}) {
  const dispatch = useDispatch();
  return(
      <div className={classes.container}>
          <label htmlFor={id} >{isLabel}</label>
          <input
              type={isType}
              id={id}
              value={currentSelector}
              onChange={(e) => currentDispatch ? dispatch(currentDispatch(e.target.value)) : stateFunc(e.target.value)}
              autoComplete="off"
          />
      </div>
  )
}

Input.propTypes = {
    id: PropTypes.string,
    isType: PropTypes.string,
    isLabel: PropTypes.string,
    currentSelector: PropTypes.string,
    currentDispatch: PropTypes.func,
    stateFunc: PropTypes.func
}
