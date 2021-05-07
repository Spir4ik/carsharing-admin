import React from 'react'
import PropTypes from 'prop-types';
import classes from './Input.module.scss'

export default function Input({id, type, label, value, changeFunc, maxLength, placeholder, errorState}) {
  const test = (typeElem) => {
    if (errorState) {
      switch (typeElem) {
        case 'class': {
          return errorState.state ? `${classes.error}` : null;
        }
        case 'HtmlElem': {
          return errorState.state ? <span>{errorState.text}</span> : null;
        }
        default:
          return null;
      }
    }
    return null
  }
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
            className={test('class')}
            placeholder={placeholder}
          />
        {test('HtmlElem')}
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
    placeholder: PropTypes.string,
    errorState: PropTypes.object
}
