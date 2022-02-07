import React, { ComponentType, ReactElement } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { AppStoreType } from 'redux/redux-store';

type MapStateToPropsType = { isAuth: boolean };
const mapStateToPropsForRedirect = (state: AppStoreType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(Component: ComponentType<T>): any {
  const RedirectComponent = (props: MapStateToPropsType): ReactElement => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) return <Redirect to="/login" />;

    return <Component {...(restProps as T)} />;
  };

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
