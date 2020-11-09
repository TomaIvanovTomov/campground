import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Plan from '../pages/Plan';
import Property from '../pages/Property';
import Book from '../pages/Book';
import Results from '../pages/Results';
import Trips from '../pages/Trips';
import Trip from '../pages/Trip';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Signin} />

            <Route path="/plan" component={Plan} />
            <Route path="/property/:id" component={Property} />
            <Route path="/book/:id" component={Book} />

            <Route path="/property" component={Property} />

            <Route path="/results" component={Results} />
            <Route path="/trips" exact component={Trips} />
            <Route path="/trips/:id" component={Trip} />

            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    )
}
