import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import classes from './CarSettings.module.scss'
import Input from "../input/Input.jsx";
import SelectPrice from "../selectPrice/SelectPrice.jsx";
import carStoreSelector from "../../redux/selectors/carStoreSelector";
import {addColor, addName, addCategoryId, addThumbnail, addDescription} from "../../redux/actions/carStoreAction"
import getCars from "../../redux/thunk/getCars";

export default function() {
  const [textForColor, setTextForColor] = useState("")
  const dispatch = useDispatch();
  const carStore = useSelector(carStoreSelector());
  const carsList = useSelector(state => state.getCarsReducer)
  useEffect(() => dispatch(getCars()), [])
  console.log(carsList);
  return(
    <div className={classes.container}>
      <div className={classes.header}>
        <span>Настройки автомобиля</span>
      </div>
      <div className={classes.body}>
        <form>
          <Input
            id="model-auto"
            isType="text"
            isLabel="Модель автомобиля"
            currentSelector={carStore.name}
            currentDispatch={addName}
          />
          <Input
            id="type-auto"
            isType="text"
            isLabel="Тип автомобиля"
          />
          <div className={classes.colors}>
            <Input
              id="color-auto"
              isType="text"
              isLabel="Доступные цвета"
              currentSelector={textForColor}
              stateFunc={setTextForColor}
            />
            <div className={classes.btnAddColor} onClick={() => {
              setTextForColor("");
              dispatch(addColor(textForColor));
            }}>
              <span></span>
              <span></span>
            </div>
          </div>
          <SelectPrice />
        </form>
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
