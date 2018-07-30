import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../screens/landing';
import Themes from '../screens/themes/container';

const routes = (
    <Switch>
        <Route path="/preview/local" component={Themes} />
        <Route path="/" component={Landing} />
    </Switch>
);

export default routes;