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
          isType="text"
          isLabel="Почта"
          currentSelector={authInfo.username}
          currentDispatch={addEmail}
        />
        <Input
          id="password"
          isType="password"
          isLabel="Пароль"
          currentSelector={authInfo.password}
          currentDispatch={addPassword}
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
