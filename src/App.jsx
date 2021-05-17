
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setWords} from "./redux/words";
import {removeSelected, addSelected} from "./redux/selected";
import {dictionaryApi} from "./api/dictionaryApi";
import {removeBackupDataValue} from "./lib/removeBackupDataValue";
import {addBackupDataValue} from "./lib/addBackupDataValue";
import Footer from "./content/Footer";
import {Switch} from "./mode/Switch";


function App() {

    let backup = JSON.parse(localStorage.getItem("backup"));
    if (!backup) {
        localStorage.setItem('backupData', JSON.stringify([]));
    }
    localStorage.setItem('backup', JSON.stringify(true));

    const dispatch = useDispatch()
    const words = useSelector(state => state.words.words[0])
    const selected = useSelector(state => state.selected.selected)


    const downloadData = (value) => {
        dispatch(async () => {
            // 'vrs/' query parameter for api https://dictionaryapi.com/,the call  returns a variant of a word in an array
            let response = await dictionaryApi.getWords(value,'vrs/')
            if (response.length > 3) {
                response.length = 3
            }
            let words = []
            for (let el of response) {
                //returns an object with parameters for the word
                let res = await dictionaryApi.getWords(el,'/')
                words.push(res[0])
            }
            dispatch(setWords(words))
        })
    }

    return (
        <div className=' wrapper'>
            <div className="page white column lg-12" >
                <Switch words={words}
                        selected={selected}
                        downloadData={downloadData}
                        add={(value) => {
                            dispatch(addSelected(value));
                            addBackupDataValue(value)
                        }}
                        remove={(value) => {
                            dispatch(removeSelected(value))
                            removeBackupDataValue(value)

                        }}
                />
                <Footer/>

            </div>
        </div>

    );
}

export default App;
