import { FC, ReactElement } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Aside } from 'components/Aside/Aside';
import DialogsContainer from 'components/Dialogs/DialogsContainer';
import HeaderContainer from 'components/Header/HeaderContainer';
import { Login } from 'components/Login/Login';
import ProfileContainer from 'components/Profile/ProfileContainer';
import UsersContainer from 'components/Users/UsersContainer';

export const App: FC = (): ReactElement => (
  <HashRouter>
    <Switch>
      <div className="wrapper">
        <Aside />
        <main className="main">
          <HeaderContainer />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
          {/* <Route */}
          {/*  path={"/friends"} */}
          {/*  render={() => <Friends/>} */}
          {/* /> */}
        </main>
      </div>
    </Switch>
  </HashRouter>
);
