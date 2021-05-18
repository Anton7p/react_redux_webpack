import "./styles/star.less"
import "./styles/style.less"
import "./styles/grid.less"
import React from "react"
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import WordKeeper from "./WordKeeper.jsx";


ReactDOM.render(
    <Provider store={store}>
        <WordKeeper/>
    </Provider>,
    document.getElementById("root")
);
