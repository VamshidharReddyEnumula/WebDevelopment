import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
//import Home from './components/home/home'
//import Login from './components/login/login'
import registerServiceWorker from './registerServiceWorker';
//import '../bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
