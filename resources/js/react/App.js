import React from 'react';
import {Router} from 'react-router-dom';
import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

import {ToastContainer} from 'react-toastify';
import {Sanctum, SanctumContext} from 'react-sanctum';

const sanctumConfig = {
    api_url: process.env.MIX_APPLICATION_URL,
    csrf_cookie_route: "sanctum/csrf-cookie",
    signin_route: "api/v1/login",
    signout_route: "api/v1/logout",
    user_object_route: "api/v1/user",
};

function App() {
    return (
        <Sanctum config={sanctumConfig}>
            <Router history={history}>
                <Routes/>
                <GlobalStyle/>
                <ToastContainer autoClose={2500}/>
            </Router>
        </Sanctum>
    );
}

export default App;
