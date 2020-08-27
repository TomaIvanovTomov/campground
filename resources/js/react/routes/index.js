import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Property from '../pages/Property';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/property" component={Property} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    )
}