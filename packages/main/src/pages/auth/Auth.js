import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UnauthenticatedRoute } from 'App/routeTypes';
import routes from './routes';

const Auth = () => (
  <Switch>
    <Route>
      <Switch>
        <Route path="/auth/code" component={routes.code} />
        <Route path="/auth/stripe" component={routes.stripe} />
        <UnauthenticatedRoute
          path="/auth/login"
          component={() => {
            window.location = `https://accounts.churro.io/auth/auth?client_id=agent.churro&redirect_uri=${
              process.env.REACT_APP_PUBLIC_URL
            }/auth/code&response_type=code&scope=openid profile email offline_access&nonce=12&state=321&prompt=consent`;
          }}
        />
        <Route exact path="/auth/logout" component={routes.logout} />
        <Route
          exact
          path="/auth/logout/complete"
          component={routes.logoutComplete}
        />
      </Switch>
    </Route>
  </Switch>
);

export default Auth;
