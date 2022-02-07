import { SUCCESS_VALUE, usersAPI } from 'api/api';

type locationType = {
  city: string;
  country: string;
};
export type UserType = {
  id: number;
  followed: boolean;
  photos: UserPhotosType;
  name: string;
  status: string;
  location: locationType;
};
type UserPhotosType = {
  small: string;
  large: string;
};

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>,
};

export type UsersInitialStateType = typeof initialState;

export const usersReducer = (
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
      return { ...state, users: action.users };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'SET_TOTAL_COUNT':
      return { ...state, totalUsersCount: action.count };
    case 'TOGGLE_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId),
      };
    default:
      return state;
  }
};

type ActionsTypes =
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleIsFollowingProgress>;

export const followSuccess = (userId: number) => ({ type: 'FOLLOW', userId } as const);
export const unfollowSuccess = (userId: number) =>
  ({ type: 'UNFOLLOW', userId } as const);
export const setUsers = (users: any) => ({ type: 'SET_USERS', users } as const);
export const setCurrentPage = (currentPage: number) =>
  ({ type: 'SET_CURRENT_PAGE', currentPage } as const);
export const setUsersTotalCount = (count: number) =>
  ({ type: 'SET_TOTAL_COUNT', count } as const);
export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const);
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) =>
  ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId,
  } as const);

export const getUsersThunkCreator =
  (currentPage: number, pageSize: number) => (disptach: any) => {
    // return THUNK
    disptach(toggleIsFetching(true)); // loader on, we have to dispatch it

    usersAPI
      .getUsers(currentPage, pageSize) // get data with params, use closure
      .then((data: any) => {
        disptach(toggleIsFetching(false)); // loader off, we have to dispatch it
        disptach(setUsers(data.items)); // set Users to BLL, we have to dispatch it
        disptach(setUsersTotalCount(data.totalCount)); // set UsersTotalCount to BLL, we have to dispatch it
      });
  };

export const follow = (userId: number) => (disptach: any) => {
  // return THUNK
  disptach(toggleIsFollowingProgress(true, userId));
  usersAPI.followUsers(userId).then((data: any) => {
    if (data.resultCode === SUCCESS_VALUE) {
      disptach(followSuccess(userId));
    }
    disptach(toggleIsFollowingProgress(false, userId));
  });
};

export const unfollow = (userId: number) => (disptach: any) => {
  // return THUNK
  disptach(toggleIsFollowingProgress(true, userId));
  usersAPI.unfollowUsers(userId).then((data: any) => {
    if (data.resultCode === SUCCESS_VALUE) {
      disptach(unfollowSuccess(userId));
    }
    disptach(toggleIsFollowingProgress(false, userId));
  });
};
