import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import classes from './Select.module.scss';

export default function Select({currentArray, currentFunc, errorState, errorFunc, label, optionName, value}) {
  const dispatch = useDispatch();
  const typeOfArray = {
    string(event) {
      return dispatch(currentFunc(event.target.value));
    },
    object(event) {
      const userChoice = currentArray.filter(item => {
        return item.name.includes(event.target.value) ? item : null;
      });
      return typeof userChoice[0] === 'object' ? dispatch(currentFunc(userChoice[0])) : dispatch(currentFunc({}));
    }
  };

  const defineClass = () => {
    if (errorState) {
      return errorState.state ? classes.error : classes.default;
    }
    return classes.default;
  }

  const handleChange = (event) => {
    const typeOfElementInArray = typeof currentArray[0];
    if (errorFunc) dispatch(errorFunc(false));
    return typeOfArray[typeOfElementInArray](event);
  };

  return(
    <div className={classes.container}>
      {label && <label>Тип автомобиля</label>}
      <div className={classes.select}>
        <select onChange={(e) => handleChange(e)}
                className={defineClass()}
                value={value}
        >
          <option value={{name: "Выберите тип"}}>{optionName}</option>
          {currentArray ? currentArray.map((item, index) =>
            (
              item.hasOwnProperty("name") ?
                <option key={index} value={item.name}>{item.name}</option>
                :
                <option key={index} value={item}>{item}</option>
            )
          ) : null}
        </select>
      </div>
      {errorState && (errorState.state && <span>{errorState.text}</span>)}
    </div>
  )
}

Select.propTypes = {
  currentArray: PropTypes.array,
  currentFunc: PropTypes.func,
  errorState: PropTypes.object,
  errorFunc: PropTypes.func,
  label: PropTypes.string,
  optionName: PropTypes.string,
  value: PropTypes.string,
}

