import React, { ReactElement } from 'react';

import { connect } from 'react-redux';

import { Header } from './Header';

import { getAuthUserData } from 'redux/auth-reducer';
import { AppStoreType } from 'redux/redux-store';

type mapStateToPropsType = { isAuth: boolean; login: string };
type mapDispatchToPropsType = { getAuthUserData: () => any };
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderPropsType> {
  componentDidMount(): any {
    this.props.getAuthUserData();
  }

  render(): ReactElement {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
