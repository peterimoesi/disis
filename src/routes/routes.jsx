import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../screens/landing';
import Dashboard from '../screens/dashboard';
import Themes from '../screens/themes/container';
import DemoPreview from '../screens/demoPreview';
import Login from '../screens/account/login';

const routes = (
    <Switch>
        <Route path="/app/preview/demo" component={DemoPreview} />
        <Route path="/app/dashboard" component={Dashboard} />
        <Route path="/app/login" component={Login} />
        <Route exach path="/:id" component={Themes} />
        <Route path="/" component={Landing} />
    </Switch>
);

export default routes;