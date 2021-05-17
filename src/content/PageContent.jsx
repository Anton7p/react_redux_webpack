import React, {useState} from 'react';
import FormGroup from "../FormGroup/FormGroup.jsx";
import ListGroup from "../ListrGroup/ListGroup.jsx";
import {useControlContext} from "../mode/SwitchingModeControl.jsx";
import {filterCheckbox} from "../lib/filterCheckbox";
import {filterSearchValue} from "../lib/filterSearchValue";


function PageContent(props) {
    const {mode} = useControlContext()
    let backupData = JSON.parse(localStorage.getItem("backupData"));

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
    function handleClick() {
        console.log(text)
        props.downloadData(text)
    }

    return (
        <div className="row" >
            <div className="  column lg-12">
                <div className=" row">
                    <div className=" row">
                        <FormGroup {...props}
                                   setText={setText}
                                   selected={props.selected.length > 0 ? props.selected : backupData}
                                   handleClick={handleClick}
                                   handleCheckbox={handleCheckbox}/>
                        <ListGroup {...props}
                                   words={mode === 'view'
                                       ? props.words
                                       : filterCheckbox(filterSearchValue(props.selected.length > 0 ? props.selected : backupData,text), arr)}

                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageContent;