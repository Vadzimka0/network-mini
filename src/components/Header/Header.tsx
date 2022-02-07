import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import c from './Header.module.css';

import bell from 'assets/images/bell.svg';
import chat from 'assets/images/chat.svg';
import avatar from 'assets/images/img-1-1.jpg';

type PropsType = {
  login: string;
  isAuth: boolean;
};

export const Header = ({ login, isAuth }: PropsType): ReactElement => (
  <div className={c.header}>
    <input
      className={c.header__input}
      type="text"
      placeholder="Search for Friends , Videos and more.."
    />
    <div className={c.header__buttons}>
      <button type="button" className={c.btn__messages}>
        <img className={c.message__img} src={chat} alt="chat icon" />
      </button>
      <button type="button" className={c.btn__notifications}>
        <img className={c.notification__img} src={bell} alt="bell icon" />
      </button>
      <button type="button" className={c.btn__avatar}>
        <img className={c.avatar__img} src={avatar} alt="avatar pic" />
      </button>
      <div className={c.btn__login}>
        {isAuth ? login : <NavLink to="/login">Login</NavLink>}
      </div>
    </div>
  </div>
);
