
import './styles/star.less'
import './styles/style.less'
import './styles/grid.less'
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
