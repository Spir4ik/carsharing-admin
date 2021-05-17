import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addThumbnail, addDescription } from '../../redux/actions/carStoreAction'
import classes from './UserDetails.module.scss'
import carStoreSelector from "../../redux/selectors/carStoreSelector";
import progressSelector from "../../redux/selectors/progressSelector";
import noImage from '../../assets/images/no-image.png'
import ProgressBar from "../progressBar/ProgressBar.jsx";

export default function() {
  const dispatch = useDispatch();
  const carStore = useSelector(carStoreSelector());
  const progressValue = useSelector(progressSelector());
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (event.target.files.length === 0) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      selectedFile.path = event.target.result;
      const imageFile = {
        path: selectedFile.path,
        originalname: selectedFile.name,
        mimetype: selectedFile.type,
        size: selectedFile.size
      };
      dispatch(addThumbnail(imageFile));
    };
    reader.readAsDataURL(selectedFile);
  };

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
            <span>{progressValue.sum}%</span>
          </div>
          <ProgressBar />
        </div>
      </div>
      <div className={classes.description}>
        <div className={classes.block}>
          <span>Описание</span>
          <textarea
            name="description"
            id="description"
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
