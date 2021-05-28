import React from 'react'
import DatePicker, {registerLocale} from "react-datepicker";
import moment from "moment";
import ru from 'date-fns/locale/ru'
import styleDate from './DatePicker.module.scss'

import "react-datepicker/dist/react-datepicker-cssmodules.css";

moment.locale('ru');

export default function () {
  registerLocale('ru', ru);

  return (
    <div className={styleDate.date}>
      <div className={styleDate.date__from}>
        <label>С</label>
        <DatePicker
          selectsStart
          startDate={new Date()}
          minDate={new Date()}
          showTimeSelect
          disabledKeyboardNavigation
          timeFormat="p"
          timeIntervals={60}
          locale="ru"
          dateFormat="Pp"
          placeholderText="Выберите дату и время"
        />
      </div>
      <div className={styleDate.date__to}>
        <label>По</label>
        <DatePicker
          selectsEnd
          showTimeSelect
          disabledKeyboardNavigation
          timeFormat="p"
          timeIntervals={60}
          locale="ru"
          dateFormat="Pp"
          placeholderText="Выберите дату и время"
        />
      </div>
    </div>
  );
}
