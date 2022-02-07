import React, { ReactElement } from 'react';

import c from '../Dialogs.module.css';

type MessagePropsType = {
  message: string;
};

export const Message = ({ message }: MessagePropsType): ReactElement => (
  <div className={c.message}>{message}</div>
);
