import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import s from './Users.module.css';

import userPhoto from 'assets/images/plug-avatar.png';
import { UserType } from 'redux/users-reducer';

type Props = {
  users: Array<UserType>;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  onPageChanged: (p: number) => void;
  // toggleIsFollowingProgress: (is: boolean, id: number) => void
  followingInProgress: Array<number>;
};

export const Users = (props: Props): ReactElement => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pagination}>
        {pages.map(p => (
          <button
            type="button"
            key={new Date().toLocaleDateString()}
            className={props.currentPage === p ? s.selectedPage : s.unSelectedPage}
            onClick={() => props.onPageChanged(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <div className={s.grid}>
        {props.users.map(u => (
          <div key={u.id}>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  alt="avatar"
                  className={s.userPic}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  type="button"
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  type="button"
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => props.follow(u.id)}
                >
                  Follow
                </button>
              )}
            </div>
            <div>{u.name}</div>
            <div className={s.status}>{u.status}</div>
            <div>u.location.country</div>
            <div>u.location.city</div>
          </div>
        ))}
      </div>
    </div>
  );
};
