import './styles/style.css'
import './styles/less.less'
import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/redux";


ReactDOM.render(
    <Provider store={store}>
        <div>hello</div>
    </Provider>,
    document.getElementById('root')
);
