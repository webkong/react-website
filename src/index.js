import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter, Route} from 'react-router-dom';
import * as ServiceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter>
        <Route to="/" component={App}/>
    </HashRouter>
    , document.getElementById('root'));
ServiceWorker.unregister();
