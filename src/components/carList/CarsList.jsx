import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import PropTypes from 'prop-types';
import classes from './CarsList.module.scss';
import { addCompletedCar } from '../../redux/actions/carStoreAction'

export default function CarsList({cars}) {
  const dispatch = useDispatch();
  const history = useHistory();

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
              <tr
                key={index}
                onClick={() => {
                    dispatch(addCompletedCar(item));
                    history.push("/admin/editpage");
              }}>
                <td className={classes.nameModel}>{item.name !== null ? item.name : "Нет названия"}</td>
                <td className={classes.otherParam}>{item.categoryId !== null ? item.categoryId.name : "Нет категории"}</td>
                <td className={classes.otherParam}>{item.number ? item.number : "A000AA00"}</td>
                <td className={classes.otherParam}>{item.tank ? `${item.tank} %` : `0 %`}</td>
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
