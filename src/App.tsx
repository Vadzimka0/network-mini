import { FC, ReactElement } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Aside } from 'components/Aside/Aside';
import DialogsContainer from 'components/Dialogs/DialogsContainer';
import HeaderContainer from 'components/Header/HeaderContainer';
import { Login } from 'components/Login/Login';
import ProfileContainer from 'components/Profile/ProfileContainer';

export const App: FC = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <div className="wrapper">
        <Aside />
        <main className="main">
          <HeaderContainer />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          {/* <Route path="/users" render={() => <UsersContainer />} /> */}
          <Route path="/login" render={() => <Login />} />
          {/* <Route */}
          {/*  path={"/friends"} */}
          {/*  render={() => <Friends/>} */}
          {/* /> */}
        </main>
      </div>
    </Switch>
  </BrowserRouter>
);
