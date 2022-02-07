import React, { ReactElement } from 'react';

import c from './Post.module.css';

import { PostType } from 'redux/profile-reducer';

export const Post = ({ id, likesCount, postText }: PostType): ReactElement => (
  <div className={c.item}>
    <div>
      <span>Post {id}</span>
      <span> | {likesCount} likes</span>
    </div>
    <img className={c.image} src="https://picsum.photos/180?random=" alt="" />
    <p>{postText}</p>
  </div>
);
