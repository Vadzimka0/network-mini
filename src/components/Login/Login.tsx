import React, { ReactElement } from 'react';

import styles from './Login.module.css';
/* type PropsType = {
  // login: string
  // isAuth: boolean
}; */

export const Login = (): ReactElement => (
  <div className={styles.wrapper}>
    <h3 className={styles.title}>Sign In</h3>

    <form onSubmit={event => event.preventDefault()} className={styles.form}>
      <label htmlFor="loginEmail">
        <div>E-mail:</div>
        <input id="loginEmail" type="email" />
      </label>
      <label htmlFor="loginPassword">
        <div>Password:</div>
        <input id="loginPassword" type="password" autoComplete="on" />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
);
