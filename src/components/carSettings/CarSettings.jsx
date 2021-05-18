import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  addColor,
  addName,
  addCategoryId,
  addTank,
  addNumber,
  clear
} from "../../redux/actions/carStoreAction"
import addTextForColor from "../../redux/actions/textForColorAction";
import {
  errorModel,
  errorNumber,
  errorPrice,
  errorSelect,
  errorTank,
  errorColor
} from "../../redux/actions/errorsAction"
import classes from './CarSettings.module.scss'
import Input from "../input/Input.jsx";
import SelectPrice from "../selectPrice/SelectPrice.jsx";
import Checkbox from "../checkboxItem/Checkbox.jsx";
import Select from "../selectComp/Select.jsx";
import carStoreSelector from "../../redux/selectors/carStoreSelector";
import categorySelector from "../../redux/selectors/categorySelector";
import textForColorSelector from "../../redux/selectors/textForColorSelector";
import errorSelector from "../../redux/selectors/errorSelector";
import getCategory from "../../redux/thunk/getCategory";
import alertAction from "../../redux/actions/alertAction";
import postCarRequest from "../../redux/thunk/postCarRequest";
import postCarSelector from "../../redux/selectors/postCarSelector";

export default function() {
  const [numberMistakes, setNumberMistakes] = useState(0);
  const dispatch = useDispatch();
  const carStore = useSelector(carStoreSelector());
  const category = useSelector(categorySelector()).category;
  const textForColor = useSelector(textForColorSelector());
  const errors = useSelector(errorSelector());
  const postCarStatus = useSelector(postCarSelector()).car;
  useEffect(() => dispatch(getCategory()), []);
  useEffect(() => {
    if (postCarStatus.hasOwnProperty("id")) {
      dispatch(alertAction());
      dispatch(clear());
    }
  }, [postCarStatus]);

  const handleChange = (event, dispatchFunc, errorFunc) => {
    dispatch(errorFunc(false));
    return dispatch(dispatchFunc(event.target.value));
  };

  const handleRequestPost = () => {
    const generateError = (errorFunc) => {
      setNumberMistakes(value => value + 1);
      return dispatch(errorFunc(true));
    };

    if (carStore.name === "") {
      generateError(errorModel);
    }
    if (carStore.colors.length === 0) {
      generateError(errorColor);
    }
    if (carStore.tank === "") {
      generateError(errorTank);
    }
    if (carStore.number === "") {
      generateError(errorNumber);
    }
    if (!carStore.categoryId.hasOwnProperty("name")) {
      generateError(errorSelect);
    }
    if (carStore.priceMin === 0 || carStore.priceMin > carStore.priceMax) {
      generateError(errorPrice);
    }
    return numberMistakes === 0 ? dispatch(postCarRequest(carStore)) : console.error("No POST")
  }

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
              changeFunc={(e) => handleChange(e, addName, errorModel)}
              placeholder="Введите модель..."
              errorState={errors.inputModel}
            />
            <Select
              currentArray={category}
              currentFunc={addCategoryId}
              errorFunc={errorSelect}
              errorState={errors.inputSelect}
              label="Тип автомобиля"
              optionName="Выберите тип автомобиля"
            />
            <div className={classes.colors}>
              <Input
                id="color-auto"
                type="text"
                label="Доступные цвета"
                value={textForColor}
                changeFunc={e => handleChange(e, addTextForColor, errorColor)}
                placeholder="Добавьте цвета..."
                errorState={errors.inputColor}
              />
              <div
                className={classes.btnAddColor}
                onClick={() => {
                  if (textForColor === "") return dispatch(errorColor(true));
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
              label="Количества топлива, %"
              maxLength={3}
              value={carStore.tank}
              changeFunc={e => handleChange(e, addTank, errorTank)}
              placeholder="100%"
              errorState={errors.inputTank}
            />
            <Input
              id="number-auto"
              type="text"
              label="Номера автомобиля"
              maxLength={8}
              value={carStore.number}
              changeFunc={e => handleChange(e, addNumber, errorNumber)}
              placeholder="A000AA00"
              errorState={errors.inputNumber}
            />
            <SelectPrice
              errorFunc={errorPrice}
              errorState={errors.inputPrice}
            />
          </div>
        </div>
        <div className={classes.btn__lineBlock}>
          <div className={classes.btn__groupe}>
            <button onClick={() => handleRequestPost()}>Сохранить</button>
            <button onClick={() => dispatch(clear())}>Отменить</button>
          </div>
          <div className={classes.btn__delete}>
            <button>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
