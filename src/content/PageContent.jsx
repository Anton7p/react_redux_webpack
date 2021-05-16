import React, {useState} from 'react';
import FormGroup from "../FormGroup/FormGroup.jsx";
import ListGroup from "../ListrGroup/ListGroup.jsx";
import {useControlContext} from "../ModeControl/SwitchingModeControl.jsx";
import {filterCheckbox} from "../lib/filterCheckbox";
import {filterSearchValue} from "../lib/filterSearchValue";


function PageContent(props) {
    const {mode} = useControlContext()
    let backUpData = JSON.parse(localStorage.getItem("backUpData"));

    const [flag, setFlag] = useState(true)
    const [text, setText] = useState(' ')
    let [arr, setArr] = useState([])

    function handleCheckbox(element, value) {
        if (element) {
            arr.push(value)
            setArr(arr)
            setFlag(!flag)
        } else {
            setArr(arr.filter(el => el !== value))
        }
    }


    return (
        <div className=" page_main row">
            <div className="  column lg-12">
                <div className=" row">
                    <div className=" row">
                        <FormGroup {...props}
                                   setText={setText}
                                   selected={props.selected.length > 0 ? props.selected : backUpData}
                                   handleCheckbox={handleCheckbox}/>
                        <ListGroup {...props}
                                   words={mode === 'view'
                                       ? props.words
                                       : filterCheckbox(filterSearchValue(props.selected.length > 0 ? props.selected : backUpData,text), arr)}

                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageContent;