import { UserType } from './users-reducer';

/* type locationType = {
  city: string;
  country: string;
}; */

const initialState = {
  users: [
    /*    {
      id: 1,
      photoUrl: 'https://hsto.org/r/w1560/files/a1a/b71/b86/a1ab71b86b0e477993b9a161d42c57cf.jpg',
      followed: false,
      fullName: 'Vadzim',
      status: 'sleep...',
      location: {city: 'Hrodna', country: 'Belarus'}
    },
    {
      id: 2, photoUrl: 'https://hsto.org/r/w1560/files/a1a/b71/b86/a1ab71b86b0e477993b9a161d42c57cf.jpg',
      followed: true, fullName: 'Dmitrij', status: 'writing code', location: {city: 'Moscow', country: 'Russia'}
    },
    {
      id: 3, photoUrl: 'https://hsto.org/r/w1560/files/a1a/b71/b86/a1ab71b86b0e477993b9a161d42c57cf.jpg',
      followed: false, fullName: 'Alexandr', status: 'run', location: {city: 'Kiev', country: 'Ukraine'}
    } */
  ] as Array<UserType>,
};

export type UsersInitialStateType = typeof initialState;

export const friendsReducer = (
  state: UsersInitialStateType = initialState,
  action: ActionsTypes,
): UsersInitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u =>
          u.id === action.userId ? { ...u, followed: true } : u,
        ),
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u =>
          u.id === action.userId ? { ...u, followed: false } : u,
        ),
      };
    case 'SET_USERS':
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

type ActionsTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>;

export const followAC = (userId: number) => ({ type: 'FOLLOW', userId } as const);
export const unfollowAC = (userId: number) => ({ type: 'UNFOLLOW', userId } as const);
export const setUsersAC = (users: Array<UserType>) =>
  ({ type: 'SET_USERS', users } as const);

/*
export const changeNewTextAC = (newText: string) => {
  return {type: "UPDATE-NEW-POST-TEXT", newText: newText} as const
} */
