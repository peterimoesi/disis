import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../screens/landing';

const routes = (
    <Switch>
        <Route path="/" component={Landing} />
    </Switch>
);

export default routes;