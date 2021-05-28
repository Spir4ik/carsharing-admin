import React from 'react';
import classes from './CarSettings.module.scss'
import Select from "../selectComp/Select.jsx";
import DatePicker from "../datePicker/DatePicker.jsx";

export default function() {
  return(
    <div className={classes.container}>
      <div className={classes.header}>
        <span>Настройки заказа</span>
      </div>
      <div className={classes.body}>
        <div>
          <form>
            <Select
              label="Выбранный город"
            />
            <Select
              label="Выбранный адрес"
            />
          </form>
          <div className={classes.body__param + " " + classes.body__paramOrder}>
            <div className={classes.patamOrder__date}>
              <label>Выбранная дата</label>
              <DatePicker />
            </div>
            <Select
              label="Выбранный тариф"
            />
          </div>
        </div>
        <div className={classes.btn__lineBlock}>
          <div className={classes.btn__groupe}>
            <button >Сохранить</button>
            <button >Отменить</button>
          </div>
          <div className={classes.btn__delete}>
            <button >Удалить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
