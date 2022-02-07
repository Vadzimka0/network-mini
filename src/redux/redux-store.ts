import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { authReducer } from './auth-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { friendsReducer } from './friends-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  friends: friendsReducer, // test data
});

export type AppStoreType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
