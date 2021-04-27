import React from 'react'
import Input from '../../components/input/Input.jsx';
import AuthForms from "../../components/authForms/AuthForms.jsx";
import classes from './AuthorizationPage.module.scss'
import iconLogo from '../../assets/icon-logo.svg'

export default function() {
    return(
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.content__header}>
                        <div className={classes.header__logo}>
                            <img src={iconLogo} alt=""/>
                        </div>
                        <div className={classes.header__name}>
                            <p>Need for drive</p>
                        </div>
                    </div>
                    <div className={classes.content__forms}>
                        <div className={classes.forms__header}>
                            <p>Вход</p>
                        </div>
                        <AuthForms />
                    </div>
                </div>
            </div>
        </div>
    )
}
