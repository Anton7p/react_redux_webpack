import React, {useState} from "react";
import FormGroup from "../FormGroup/FormGroup.jsx";
import ListGroup from "../ListrGroup/ListGroup.jsx";
import {useControlContext} from "../mode/ModeControl.jsx";
import {filterByCheckboxItem} from "../lib/filterByCheckboxItem";
import {filterByInputSearchValue} from "../lib/filterByInputSearchValue";
import {dictionaryApi} from "../api/dictionaryApi";
import {setWords} from "../redux/reducers/words";
import {useDispatch} from "react-redux";

/**
 * IThis component processes data from the Input and Checkbox components
 * if the mode "view" is loading data,else the array is filtered
 * If the user searches for a word or part of speech, the function filterByInputSearchValue or  function filterByCheckboxItem
 * filters the word array and returns the found object;
 */


function PageContent(props) {
    const {mode} = useControlContext();
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(true);
    const [inputValue, setInputValue] = useState(' ');
    let [checkboxItems, setCheckboxItems] = useState([]);


    function handleCheckbox(element, value) {
        if (element) {
            checkboxItems.push(value);
            setCheckboxItems(checkboxItems);
            setFlag(!flag);
        } else {
            let arr = checkboxItems.filter(el => el !== value)
            setCheckboxItems(arr);
        }
    }

    const downloadData = (value) => {
        dispatch(async () => {
            // 'vrs/' query parameter for api https://dictionaryapi.com/,the call  returns a variant of a word in an array
            let response = await dictionaryApi.getWords(value, "vrs/");
            if (response.length > 10) {
                response.length = 10;
            }
            let words = []
            for (let el of response) {
                //returns an object with parameters for the word
                let res = await dictionaryApi.getWords(el, "/");
                words.push(res[0]);
            }
            dispatch(setWords(words));
        })
    }


    function handleClick() {
        if (inputValue === ' ') return;
        downloadData(inputValue);
    }

    return (
        <div className="row">
            <div className="column lg-12">
                <div className=" row">
                    <div className=" row">
                        <FormGroup {...props}
                                   downloadData={downloadData}
                                   setInputValue={setInputValue}
                                   selected={props.selected}
                                   handleClick={handleClick}
                                   handleCheckbox={handleCheckbox}/>
                        <ListGroup {...props}
                                   words={mode === "view"
                                       ? props.words
                                       : filterByCheckboxItem(
                                           filterByInputSearchValue(props.selected, inputValue),
                                           checkboxItems,
                                           setCheckboxItems
                                       )}

                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageContent;