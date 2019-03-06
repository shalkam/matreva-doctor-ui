import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirector } from 'react-router-redirect';
import Layout from 'Layout';
import routes from './rootRoutes';
import './styles/Main.scss';

const App = () => (
  <BrowserRouter
    basename={process.env.NODE_ENV === 'production' ? '/doctor' : ''}
  >
    <Layout>
      <Redirector />
      <Switch>
        <Route path="/auth" component={routes.auth} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
