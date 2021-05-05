import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {addThumbnail, addDescription} from '../../redux/actions/carStoreAction'
import classes from './UserDetails.module.scss'
import carStoreSelector from "../../redux/selectors/carStoreSelector";
import noImage from '../../assets/images/no-image.png'

export default function() {
  const dispatch = useDispatch();
  const carStore = useSelector(carStoreSelector());

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      selectedFile.path = event.target.result;
      dispatch(addThumbnail(selectedFile));
    };
    reader.readAsDataURL(selectedFile);
  }

  return(
    <div className={classes.container}>
      <div className={classes.mainLabel}>
        <div className={classes.imageBlock}>
          <img src={carStore.thumbnail.hasOwnProperty('path') ? carStore.thumbnail.path : noImage} alt="" />
        </div>
        <div className={classes.label__name}>
          <div className={classes.name__car}>
            <span>{carStore.name ? carStore.name : "Введите модель"}</span>
          </div>
          <div className={classes.name__body}>
            <span>{carStore.categoryId.hasOwnProperty("name") ? carStore.categoryId.name : "Выберите тип"}</span>
          </div>
        </div>
        <div className={classes.selectFile}>
          <input
            id="file-input"
            type="file"
            name="file"
            accept="image/*,image/jpeg,image/png"
            onChange={(event) => handleChange(event)}
          />
        </div>
      </div>
      <div className={classes.progress}>
        <div className={classes.bar}>
          <div className={classes.header}>
            <span>Заполнено</span>
            <span>74%</span>
          </div>
          <progress value="10" max="100"></progress>
        </div>
      </div>
      <div className={classes.description}>
        <div className={classes.block}>
          <span>Описание</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Введите описание ..."
            onChange={(e) => dispatch(addDescription(e.target.value))}
          ></textarea>
        </div>
      </div>
    </div>
  )
}
