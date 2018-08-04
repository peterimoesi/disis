import React from 'react';
import { Switch, Route } from 'react-router-dom';

import protectDashboard from '../utils/protectDashboard'; 

import Landing from '../screens/landing';
import Dashboard from '../screens/dashboard';
// import Themes from '../screens/themes/container';
import Userpage from '../screens/users';
import DemoPreview from '../screens/demoPreview';
import Login from '../screens/account/login';
import Signup from '../screens/account/signup';

const routes = (
    <Switch>
        <Route path="/app/preview/demo" component={DemoPreview} />
        <Route path="/app/dashboard" component={protectDashboard(Dashboard)} />
        <Route path="/app/login" component={Login} />
        <Route path="/app/signup" component={Signup} />
        <Route exach path="/user/:id" component={Userpage} />
        <Route exach path="/:userName" component={Userpage} />
        <Route path="/" component={Landing} />
    </Switch>
);

export default routes;