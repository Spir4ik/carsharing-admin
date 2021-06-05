import React from 'react';
import PropTypes from 'prop-types';
import classes from "./Order.module.scss";
import iconCheck from "../../assets/icon-check.svg";
import iconEdit from "../../assets/icon-edit.svg";
import iconReject from "../../assets/icon-reject.svg";

export default function RenderButtons({item, handleChangeOrder}) {
  return(
    <>
      <button disabled className={item.orderStatusId.name === "confirmed" ? classes.successfully : ""}><img src={iconCheck} alt="" /><span>Готово</span></button>
      <button disabled className={item.orderStatusId.name === "cancelled" ? classes.cancelled : ""}><img src={iconReject} alt="" /><span>Отмена</span></button>
      <button onClick={() => handleChangeOrder(item)}><img src={iconEdit} alt="" /><span>Изменить</span></button>
    </>
  )
}

RenderButtons.propTypes = {
  item: PropTypes.object,
  handleChangeOrder: PropTypes.func
};