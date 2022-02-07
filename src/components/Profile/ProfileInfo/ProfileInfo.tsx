import React, { ReactElement } from 'react';

import { Preloader } from '../../common/Preloader/Preloader';

import c from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus';

type ProfileInfoProps = {
  profile: any;
  status: string;
  updateStatus: (st: string) => any;
};

export const ProfileInfo = ({
  profile,
  status,
  updateStatus,
}: ProfileInfoProps): ReactElement => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={c.profile}>
      ProfileInfo: info + img
      <div>
        <img src={profile.photos.large} alt="profile pic" />
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};
