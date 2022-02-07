import React, { ChangeEvent, ReactElement } from 'react';

import c from './MyPosts.module.css';
import { MyPostsPropsType } from './MyPostsContainer';
import { Post } from './Post/Post';

export const MyPosts = ({
  posts,
  addPost,
  newPostText,
  updateNewPostText,
}: MyPostsPropsType): ReactElement => {
  const postsElements = posts.map(obj => (
    <Post key={obj.id} id={obj.id} postText={obj.postText} likesCount={obj.likesCount} />
  ));

  const onAddPost = (): void => addPost(newPostText);

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    updateNewPostText(e.currentTarget.value);
  };

  return (
    <div className={c.content}>
      <h2 className={c.content__title}>My Posts</h2>
      <div>
        <textarea value={newPostText} onChange={onChangeHandler} />
      </div>
      <button type="button" className={c.content__btn} onClick={onAddPost}>
        {' '}
        + New Post
      </button>
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};
