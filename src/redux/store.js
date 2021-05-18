import {combineReducers, configureStore} from "@reduxjs/toolkit";

import selectedReducer from "./reducers/selected";
import wordsReducer from "./reducers/words";

const rootReducer = combineReducers({
    words: wordsReducer,
    selected:selectedReducer,

})

export const store = configureStore({
    reducer: rootReducer,
})
