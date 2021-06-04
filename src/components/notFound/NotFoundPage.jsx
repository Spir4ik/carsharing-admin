import React from 'react';
import classes from "./NotFoundPage.module.scss";
import { useSelector } from "react-redux";
import putOrderSelector from "../../redux/selectors/putOrderSelector";
import deleteOrderSelector from "../../redux/selectors/deleteOrderSelector";

export default function() {
 const putStatus = useSelector(putOrderSelector());
 const statusDeleteOrder = useSelector(deleteOrderSelector()).status;
 const renderBody = () => {
  if (putStatus.status === 200 || statusDeleteOrder === 200) {
    return(
      <>
        <div className={classes.title}>
          <span>Заказ успешно {statusDeleteOrder === 200 ? "удален" : "сохранен"}</span>
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