import React from 'react';
import classes from './CarsList.module.scss';
import PropTypes from 'prop-types';

export default function CarsList({cars}) {
  return(
    <div className={classes.container}>
      <table>
        <thead>
          <tr>
            <td>Модель</td>
            <td>Категория</td>
            <td>Номер</td>
            <td>Топливо</td>
            <td>Минимальная цена</td>
            <td>Максимальная цена</td>
          </tr>
        </thead>
        <tbody>
          {cars.map((item, index) => {
            return(
              <tr key={index}>
                <td className={classes.nameModel}>{item.name}</td>
                <td className={classes.otherParam}>{item.categoryId.name}</td>
                <td className={classes.otherParam}>{item.number}</td>
                <td className={classes.otherParam}>{item.tank}</td>
                <td className={classes.otherParam}>{item.priceMin}</td>
                <td className={classes.otherParam}>{item.priceMax}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

CarsList.propTypes = {
  cars: PropTypes.array
};
