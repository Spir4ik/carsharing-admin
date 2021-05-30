import React from 'react';
import classes from "./NotFoundPage.module.scss";
import { useSelector } from "react-redux";
import putOrderSelector from "../../redux/selectors/putOrderSelector"

export default function() {
 const putStatus = useSelector(putOrderSelector());
 const renderBody = () => {
  if (putStatus.status === 200) {
    return(
      <>
        <div className={classes.title}>
          <span>Заказ успешно сохранен</span>
        </div>
        <div className={classes.body}>
          <span>Выберите заказ из <strong>списка заказов</strong> для редактирования</span>
        </div>
      </>
    )
  }
    return(
      <>
        <div className={classes.title}>
          <span>Текущий заказ не найден</span>
        </div>
        <div className={classes.body}>
          <span>Выберите заказ из <strong>списка заказов</strong> для редактирования!</span>
        </div>
      </>
    )
 }

 return(
  <div className={classes.wrapper}>
   <div className={classes.container}>
    {renderBody()}
   </div>
  </div>
 )
}