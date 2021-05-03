import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import {addThumbnail} from '../../redux/actions/carStoreAction'
import classes from './UserDetails.module.scss'

export default function() {
  const dispatch = useDispatch();

  return(
    <div className={classes.container}>
      <div className={classes.mainLabel}>
        <img src="../../assets/images/image%202.jpg" alt="" />
        <div className={classes.label__name}>
          <div className={classes.name__car}>
            <span>Hundai</span>
          </div>
          <div className={classes.name__body}>
            <span>Компакт</span>
          </div>
        </div>
        <div className={classes.selectFile}>
          <input
            id="file-input"
            type="file"
            name="file"
            accept="image/*,image/jpeg,image/png"
            onChange={(event) => {
              const selectedFile = event.target.files[0];
              const reader = new FileReader();

              reader.onload = (event) => {
                selectedFile.path = event.target.result;
                dispatch(addThumbnail(selectedFile));
              };

              reader.readAsDataURL(selectedFile);
            }}
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
          ></textarea>
        </div>
      </div>
    </div>
  )
}
