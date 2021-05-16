import './styles/style.css'
import './styles/star.css'
import './styles/less.less'
import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./redux/redux";
import App from "./App.jsx";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
