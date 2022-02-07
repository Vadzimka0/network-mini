import React, { ReactElement } from 'react';

import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { Profile } from './Profile';

import { getStatus, getUserProfile, updateStatus } from 'redux/profile-reducer';
import { AppStoreType } from 'redux/redux-store';

type UserIdType = {
  userId: number;
};
export type MapStateToPropsType = {
  profile: any;
  status: string;
};
type MapDispatchToPropsType = {
  getUserProfile: (id: number) => any;
  getStatus: (id: number) => any;
  updateStatus: (st: string) => void;
};
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType;

// @ts-ignore
type PropsType = RouteComponentProps<UserIdType> & ProfilePropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    let { userId } = this.props.match.params;
    if (!userId) {
      userId = Number(process.env.REACT_APP_MY_ID);
    }
    // if (!userId && this.props.profile) {
    //   userId = this.props.getUserProfile(userId)
    // }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render(): ReactElement {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
