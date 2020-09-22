import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Fund from '../Fund';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Fund} />
    </Switch>
  );
}
