import { profileAPI, SUCCESS_VALUE, usersAPI } from 'api/api';

export type PostType = {
  id: number;
  postText: string;
  likesCount: number;
};

const initialState = {
  newPostText: '',
  profile: null,
  posts: [
    {
      id: 1,
      postText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing.',
      likesCount: 12,
    },
    {
      id: 2,
      postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti?',
      likesCount: 101,
    },
    { id: 3, postText: 'Lorem ipsum dolor', likesCount: 3 },
    { id: 4, postText: 'Deleniti?', likesCount: 0 },
  ] as Array<PostType>,
  status: '',
};

export type ProfileInitialStateType = typeof initialState;

export const profileReducer = (
  state: ProfileInitialStateType = initialState,
  action: ActionsTypes,
): ProfileInitialStateType => {
  switch (action.type) {
    case 'ADD-POST': {
      const newPost: PostType = {
        id: 5, // id: new Date().getDate(),
        postText: action.postText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: '' };
    }
    case 'UPDATE-NEW-POST-TEXT': {
      return { ...state, newPostText: action.newText };
    }
    case 'SET_USER_PROFILE': {
      return { ...state, profile: action.profile };
    }
    case 'SET_STATUS': {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

type ActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof changeNewTextAC>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setUserProfile>;

export const addPostAC = (postText: string) => ({ type: 'ADD-POST', postText } as const);
export const changeNewTextAC = (newText: string) =>
  ({ type: 'UPDATE-NEW-POST-TEXT', newText } as const);
export const setUserProfile = (profile: any) =>
  ({ type: 'SET_USER_PROFILE', profile } as const);
export const setStatus = (status: any) => ({ type: 'SET_STATUS', status } as const);

export const getUserProfile =
  (
    userId: number, // TC
  ) =>
  (disptach: any) => {
    // Thunk
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    usersAPI.getProfile(userId).then((response: any) => {
      disptach(setUserProfile(response));
    });
  };

export const getStatus =
  (
    userId: number, // TC
  ) =>
  (disptach: any) => {
    // Thunk
    profileAPI.getStatus(userId).then((response: any) => {
      disptach(setStatus(response));
    });
  };

export const updateStatus =
  (
    status: string, // TC
  ) =>
  (disptach: any) => {
    // Thunk
    profileAPI.updateStatus(status).then((response: any) => {
      if (response.data.resultcode === SUCCESS_VALUE) {
        disptach(setStatus(status));
      }
    });
  };
