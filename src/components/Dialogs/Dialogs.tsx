import React, { ChangeEvent, ReactElement } from 'react';

import { DialogItem } from './DialogItem/DialogItem';
import c from './Dialogs.module.css';
import { DialogsPropsType } from './DialogsContainer';
import { Message } from './Message/Message';

import { DialogType, MessageType } from 'redux/dialogs-reducer';

export const Dialogs = ({
  messagesPage: state,
  sendMessage,
  updateNewMessageBody,
}: DialogsPropsType): ReactElement => {
  const dialogsElements = state.dialogs.map((obj: DialogType) => (
    <DialogItem name={obj.name} key={obj.id} id={obj.id} />
  ));

  const messagesElements = state.messages.map((obj: MessageType) => (
    <Message message={obj.message} key={obj.id} />
  ));

  const onSendMessageClick = (): void => sendMessage();
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void =>
    updateNewMessageBody(e.currentTarget.value);

  // if (!props.isAuth) return <Redirect to="/login"/>
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_names}>{dialogsElements}</div>
      <div className={c.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={state.newMessageBody}
              onChange={onNewMessageChange}
              placeholder="enter your message"
            />
          </div>
          <div>
            <button type="button" onClick={onSendMessageClick}>
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
