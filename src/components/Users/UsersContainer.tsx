import React, { ReactElement } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { Preloader } from '../common/Preloader/Preloader';

import { Users } from './Users';

import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { AppStoreType } from 'redux/redux-store';
import {
  follow,
  getUsersThunkCreator,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  toggleIsFetching,
  toggleIsFollowingProgress,
  unfollow,
  UserType,
} from 'redux/users-reducer';

type mapStateToPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};
type mapDispatchToPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNum: number) => void;
  setUsersTotalCount: (count: number) => void;
  toggleIsFetching: (is: boolean) => void;
  // toggleIsFollowingProgress: (is: boolean, id: number) => void
  getUsersThunkCreator: (currentPage: number, pageSize: number) => any;
};
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number): void => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  };

  render(): ReactElement {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

// let withRedirect = withAuthRedirect(UsersContainer)

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow /* TC */,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
    getUsersThunkCreator /* TC */,
  }),
)(UsersContainer);

/* export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer) */
