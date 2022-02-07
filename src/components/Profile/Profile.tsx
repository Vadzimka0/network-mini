import React, { ReactElement } from 'react';

import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type ProfileProps = {
  profile: any;
  status: string;
  updateStatus: (st: string) => any;
  // profile: ProfileType | null
  // isAuth: boolean
};

export const Profile = ({
  profile,
  status,
  updateStatus,
}: ProfileProps): ReactElement => (
  <div>
    <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
    <MyPostsContainer />
  </div>
);
