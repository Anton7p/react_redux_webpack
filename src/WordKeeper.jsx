import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeSelected, addSelected} from "./redux/reducers/selected";
import {removeBackupDataValue} from "./lib/removeBackupDataValue";
import {addBackupDataValue} from "./lib/addBackupDataValue";
import Footer from "./content/Footer";
import {Switch} from "./mode/Switch";

/**
 *This component loads data from the store,
 * adds and removes words from starred words  to the store and also to the localStorage
 */


function WordKeeper() {

    let backup = JSON.parse(localStorage.getItem("backup"));
    if (!backup) {
        localStorage.setItem("backup", JSON.stringify(true));
        localStorage.setItem("backupData", JSON.stringify([]));
    }

    const dispatch = useDispatch()
    const words = useSelector(state => state.words.words);
    const selected = useSelector(state => state.selected.selected);

    function getSelectedWords(selected) {
        let backupData = JSON.parse(localStorage.getItem("backupData"));
        if (selected.length < backupData.length) {
            return backupData
        }
        return selected
    }

    return (
        <div className="wrapper">
            <div className="column lg-12">
                <Switch words={words}
                        selected={getSelectedWords(selected)}
                        add={(value) => {
                            dispatch(addSelected(value));
                            addBackupDataValue(value);
                        }}
                        remove={(value) => {
                            dispatch(removeSelected(value));
                            removeBackupDataValue(value);
                        }}
                />
                <Footer/>
            </div>
        </div>

    );
}

export default WordKeeper;
