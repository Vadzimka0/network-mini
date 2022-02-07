import { FC, ReactElement } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

export const App: FC = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <div className="wrapper">
        {/* <Aside /> */}
        <main className="main">
          {/* <HeaderContainer /> */}
          {/* <Route path="/profile/:userId?" render={() => <ProfileContainer />} /> */}
          {/* <Route path="/dialogs" render={() => <DialogsContainer />} /> */}
          {/* <Route path="/users" render={() => <UsersContainer />} /> */}
          {/* <Route path="/login" render={() => <Login />} /> */}
          {/* <Route */}
          {/*  path={"/friends"} */}
          {/*  render={() => <Friends/>} */}
          {/* /> */}
        </main>
      </div>
    </Switch>
  </BrowserRouter>
);
