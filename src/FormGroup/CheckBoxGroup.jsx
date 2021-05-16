import React, {useState} from 'react';
import CheckBoxItem from "./CheckBoxItem.jsx";
import {Value} from "../lib/getValue.js";
import {uniqueArray} from "../lib/uniqueArray";

function CheckBoxGroup({selected, handleCheckbox}) {

    let partOfSpeech = []
    if (selected) {
        selected.forEach(el => {
            partOfSpeech.push(Value.Instance.getPartOfSpeech(el))
        })
    }
    return (
        <div className=" row">
            <div className=" column xs-12 ">
                {uniqueArray(partOfSpeech).map(item => {
                    if (item === 'nothing here') return null;
                    return <CheckBoxItem key={item}
                                         name={item}
                                         handleCheckbox={handleCheckbox}/>

                })}
            </div>
        </div>
    );
}

export default CheckBoxGroup;