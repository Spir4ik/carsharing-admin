import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import fetchLogin from "../../redux/thunk/login";
import { addEmail, addPassword } from '../../redux/actions/authAction'
import authSelector from "../../redux/selectors/authSelector";
import classes from './AuthForms.module.scss'
import Input from "../input/Input.jsx";

export default function() {
  const dispatch = useDispatch();
  const authInfo = useSelector(authSelector());
  const authReducer = useSelector(state => state.loginReducer)

  return(
    <div className={classes.forms__input}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          id="email"
          type="text"
          label="Почта"
          value={authInfo.username}
          changeFunc={(e) => dispatch(addEmail(e.target.value))}
        />
        <Input
          id="password"
          type="password"
          label="Пароль"
          value={authInfo.password}
          changeFunc={(e) => dispatch(addPassword(e.target.value))}
        />
        <div className={classes.forms__footer}>
          <a href="#">Запросить доступ</a>
          <button
            type="button"
            onClick={() => dispatch(fetchLogin(authInfo))}
            disabled={(authReducer.loading)}
          >{authReducer.loading ? <span></span> : "Войти"}</button>
        </div>
      </form>
    </div>
  )
}
