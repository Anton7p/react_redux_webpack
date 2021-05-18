import {createSlice} from "@reduxjs/toolkit";


const words = createSlice({
    name: "words",
    initialState: {
        words:[]
    },
    reducers: {
        setWords(state, action) {
            state.words=[];
            state.words.push(...action.payload);
        } ,
    }
})
export default words.reducer;

export const {setWords} = words.actions;




