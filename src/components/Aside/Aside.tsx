import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import c from './Aside.module.css';

import logo from 'assets/images/follow-us.svg';

export const Aside = (): ReactElement => (
  <aside className={c.aside}>
    <div className={c.logo}>
      <a className={c.logo__link} href="#!">
        <img className={c.logo__img} src={logo} alt="logo" />
      </a>
    </div>

    <nav className={c.nav}>
      <NavLink to="/profile" className={c.item} activeClassName={c.active}>
        Profile
      </NavLink>
      <NavLink to="/dialogs" className={c.item} activeClassName={c.active}>
        Messages
      </NavLink>
      <NavLink to="/users" className={c.item} activeClassName={c.active}>
        Users
      </NavLink>
      <div className={c.item}>Album</div>
      <div className={c.item}>Events</div>
      <div className={c.item}>Games</div>
    </nav>
  </aside>
);
