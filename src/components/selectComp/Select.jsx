import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import classes from './Select.module.scss';

export default function Select({currentArray, currentFunc}) {
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

  const handleChange = (event) => {
    const typeOfElementInArray = typeof currentArray[0];
    return typeOfArray[typeOfElementInArray](event);
  };

  return(
    <div className={classes.container}>
      <label>Тип автомобиля</label>
      <div className={classes.select}>
        <select onChange={(e) => handleChange(e)}>
          <option value={{name: "Выберите тип"}}>Выберите тип автомобиля...</option>
          {currentArray.map((item, index) =>
              (
                item.hasOwnProperty("name") ?
                  <option key={index} value={item.name}>{`Тип: ${item.name}`}</option>
                  :
                  <option key={index} value={item}>{item}</option>
              )
            )
          }
        </select>
      </div>
    </div>
  )
}

Select.propTypes = {
  currentArray: PropTypes.array,
  currentFunc: PropTypes.func
}

