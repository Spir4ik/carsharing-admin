import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  addColor,
  addName,
  addCategoryId,
  addTank,
  addNumber
} from "../../redux/actions/carStoreAction"
import addTextForColor from "../../redux/actions/textForColorAction"
import classes from './CarSettings.module.scss'
import Input from "../input/Input.jsx";
import SelectPrice from "../selectPrice/SelectPrice.jsx";
import Checkbox from "../checkboxItem/Checkbox.jsx";
import Select from "../selectComp/Select.jsx";
import carStoreSelector from "../../redux/selectors/carStoreSelector";
import categorySelector from "../../redux/selectors/categorySelector";
import textForColorSelector from "../../redux/selectors/textForColorSelector";
import getCategory from "../../redux/thunk/getCategory";

export default function() {
  const dispatch = useDispatch();
  const carStore = useSelector(carStoreSelector());
  const category = useSelector(categorySelector()).category;
  const textForColor = useSelector(textForColorSelector());
  useEffect(() => dispatch(getCategory()), []);

  return(
    <div className={classes.container}>
      <div className={classes.header}>
        <span>Настройки автомобиля</span>
      </div>
      <div className={classes.body}>
        <div>
          <form>
            <Input
              id="model-auto"
              type="text"
              label="Модель автомобиля"
              value={carStore.name}
              changeFunc={e => dispatch(addName(e.target.value))}
            />
            <Select
              currentArray={category}
              currentFunc={addCategoryId}
            />
            <div className={classes.colors}>
              <Input
                id="color-auto"
                type="text"
                label="Доступные цвета"
                value={textForColor}
                changeFunc={e => dispatch(addTextForColor(e.target.value))}
              />
              <div
                className={classes.btnAddColor}
                onClick={() => {
                  dispatch(addTextForColor(""));
                  dispatch(addColor(textForColor));
                }}
              >
                <span></span>
                <span></span>
              </div>
            </div>
          </form>
          <div className={classes.body__param}>
            <Checkbox />
            <Input
              id="tank-auto"
              type="text"
              label="Количество топлива, %"
              maxLength={3}
              value={carStore.tank}
              changeFunc={e => dispatch(addTank(e.target.value))}
            />
            <Input
              id="number-auto"
              type="text"
              label="Номера автомобиля"
              maxLength={6}
              value={carStore.number}
              changeFunc={e => dispatch(addNumber(e.target.value))}
            />
            <SelectPrice />
          </div>
        </div>
        <div className={classes.btn__lineBlock}>
          <div className={classes.btn__groupe}>
            <button onClick={() => console.log(carStore)}>Сохранить</button>
            <button>Отменить</button>
          </div>
          <div className={classes.btn__delete}>
            <button>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
