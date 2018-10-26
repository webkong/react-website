import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter, Route} from 'react-router-dom';
import * as ServiceWorker from './serviceWorker';
import NoMatch from "./components/404";

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>
    , document.getElementById('root'));
ServiceWorker.unregister();
