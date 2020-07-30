import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './Home';


function AppRouter() {
  return (
          <Router>
              <Switch>
                  <Route path="/" exact component={Home} />
              </Switch>

          </Router>
  );
}

export default AppRouter;
