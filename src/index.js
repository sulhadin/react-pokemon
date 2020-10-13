import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, Switch } from 'react-router-dom';

import { VariableEnum } from 'enums';
import { history } from './lib';
import { routes } from './routes';

// Global error handler
import 'lib/error';

import 'assets/styles/theme.less';

console.info('Environment: ', process.env.NODE_ENV);

// Hot reloading
if (process.env.NODE_ENV === VariableEnum.DEVELOPMENT && module.hot) {
  // Reload components
  module.hot.accept();
}

ReactDom.render(
  <Router history={history}>
    <Switch>
      {
        routes.map((routeProps) => <Route key={routeProps.key} {...routeProps} />)
      }
    </Switch>
  </Router>,
  document.getElementById('app'),
);
