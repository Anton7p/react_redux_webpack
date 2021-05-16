import {combineReducers, configureStore} from "@reduxjs/toolkit";

import selectedReducer from "./selected";
import wordsReducer from "./words";

const rootReducer = combineReducers({
    words: wordsReducer,
    selected:selectedReducer,

})

export const store = configureStore({
    reducer: rootReducer,
})
