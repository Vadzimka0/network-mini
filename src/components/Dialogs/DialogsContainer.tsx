import React from 'react';

import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';

import { Dialogs } from './Dialogs';

import { withAuthRedirect } from 'hoc/withAuthRedirect';
import {
  changeNewMessageAC,
  DialogsInitialStateType,
  sendMessageBodyAC,
} from 'redux/dialogs-reducer';
import { AppStoreType } from 'redux/redux-store';

type mapStateToPropsType = {
  messagesPage: DialogsInitialStateType;
  isAuth: boolean;
};
type mapDispatchToPropsType = {
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
};
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
  messagesPage: state.messagesPage,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
  updateNewMessageBody: (body: string) => {
    dispatch(changeNewMessageAC(body));
  },
  sendMessage: () => {
    dispatch(sendMessageBodyAC());
  },
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
