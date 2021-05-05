import React from 'react'
import PropTypes from 'prop-types';
import classes from './Input.module.scss'

export default function Input({id, type, label, value, changeFunc, maxLength}) {
  return(
      <div className={classes.container}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            value={value}
            maxLength={maxLength}
            onChange={changeFunc}
            autoComplete="off"
          />
      </div>
  )
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    maxLength: PropTypes.number,
    changeFunc: PropTypes.func,
}
