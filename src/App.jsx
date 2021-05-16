import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setWords} from "./redux/words";
import {removeSelected, addSelected} from "./redux/selected";
import {dictionaryApi} from "./api/dictionaryapi";
import {removeBackUpDataValue} from "./lib/removeBackUpDataValue";
import {addBackUpDataValue} from "./lib/addBackUpDataValue";
import Footer from "./content/Footer";
import {Switch} from "./ModeControl/Switch";


function App(props) {

    let backUp = JSON.parse(localStorage.getItem("backUp"));
    if (!backUp) {
        localStorage.setItem('backUpData', JSON.stringify([]));
    }
    localStorage.setItem('backUp', JSON.stringify(true));

    const dispatch = useDispatch()
    const words = useSelector(state => state.words.words[0])
    const selected = useSelector(state => state.selected.selected)

    const setValue = (value) => {
        dispatch(async () => {
            let response = await dictionaryApi.getWords(value,'vrs/')
            if (response.length > 3) {
                response.length = 3
            }
            let words = []
            for (let el of response) {
                let res = await dictionaryApi.getWords(el,'/')
                words.push(res[0])
            }
            dispatch(setWords(words))
        })
    }

    return (
        <div className=' wrapper'>
            <div className="page white column lg-12">
                <Switch words={words}
                        selected={selected}
                        setValue={setValue}
                        add={(value) => {
                            dispatch(addSelected(value));
                            addBackUpDataValue(value)
                        }}
                        remove={(value) => {
                            dispatch(removeSelected(value))
                            removeBackUpDataValue(value)

                        }}
                />
                <Footer/>

            </div>
        </div>

    );
}

export default App;
