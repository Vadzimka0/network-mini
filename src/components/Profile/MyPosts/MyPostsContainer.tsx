import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { MyPosts } from './MyPosts';

import { addPostAC, changeNewTextAC, PostType } from 'redux/profile-reducer';
import { AppStoreType } from 'redux/redux-store';

type mapStateToPropsType = {
  posts: Array<PostType>;
  newPostText: string;
};
type mapDispatchToPropsType = {
  updateNewPostText: (text: string) => void;
  addPost: (text: string) => void;
};
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
  updateNewPostText: (text: string) => {
    dispatch(changeNewTextAC(text));
  },
  addPost: (text: string) => {
    dispatch(addPostAC(text));
  },
});

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
