import React from 'react';
import {Switch, Route} from 'react-router';

import Home from './components/home';
import Links from './components/links';
import FAQ from './components/faq';

function Routes(props) {
  return (
    <Switch location={props.location}>
      <Route path="/" exact component={Home} key="1" />
      <Route path="/about" exact component={Links} key="2" />
      <Route path="/faq" exact component={FAQ} key="3" />
    </Switch>
  );
}

export default Routes;
