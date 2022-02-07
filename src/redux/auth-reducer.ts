import { authAPI, SUCCESS_VALUE } from 'api/api';

const initialState = {
  email: '',
  id: null,
  login: '',
  isAuth: false,
};

export type AuthInitialStateType = typeof initialState;

export const authReducer = (
  state: AuthInitialStateType = initialState,
  action: ActionsTypes,
): AuthInitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

type ActionsTypes = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (email: string, userId: number, login: string) =>
  ({
    type: 'SET_USER_DATA',
    data: { email, userId, login },
  } as const);

export const getAuthUserData = () => (disptach: any) => {
  authAPI.me().then((data: any) => {
    if (data.resultCode === SUCCESS_VALUE) {
      const { email, id, login } = data.data;
      disptach(setAuthUserData(email, id, login));
    }
  });
};
