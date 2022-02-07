import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import c from '../Dialogs.module.css';

type DialogItemType = {
  id: number;
  name: string;
};

export const DialogItem = ({ id, name }: DialogItemType): ReactElement => {
  const path = `/dialogs/${id}`;

  return (
    <div className={`${c.name} ${c.active}`}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};
