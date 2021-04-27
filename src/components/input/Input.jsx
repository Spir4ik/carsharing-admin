import React from 'react'
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import classes from './Input.module.scss'

export default function Input({id, isType, isLabel, currentSelector, currentDispatch}) {
  const dispatch = useDispatch();
  return(
      <>
          <label htmlFor={id} className={classes.label}>{isLabel}</label>
          <input
              type={isType}
              id={id}
              value={currentSelector}
              onChange={(e) => dispatch(currentDispatch(e.target.value))}
              autoComplete="off"
              className={classes.input}
          />
      </>
  )
}

Input.propTypes = {
    id: PropTypes.string,
    isType: PropTypes.string,
    isLabel: PropTypes.string,
    currentSelector: PropTypes.string,
    currentDispatch: PropTypes.func,
}
