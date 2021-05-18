import React from "react";
import CheckboxItem from "./CheckboxItem.jsx";
import {Content} from "../api/contentApi.js";
import {uniqueArray} from "../lib/uniqueArray";

function Checkbox({selected, handleCheckbox}) {

    let partOfSpeech = [];
    if (selected) {
        selected.forEach(el => {
            partOfSpeech.push(Content.Instance.getPartOfSpeech(el));
        })
    }
    return (
        <div className="row">
            <div className="column xs-12 ">
                {uniqueArray(partOfSpeech).map(item => {
                    if (item === "nothing here") return null;
                    return <CheckboxItem key={item}
                                         name={item}
                                         handleCheckbox={handleCheckbox}/>

                })}
            </div>
        </div>
    );
}

export default Checkbox;