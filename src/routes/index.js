import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';


export default () => (
  <BrowserRouter>
   <Switch>
      <Route path="/login" exact component={LoginPage} />
   </Switch>
  </BrowserRouter>
);
