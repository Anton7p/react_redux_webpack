import React from 'react';
import Input from "./Input.jsx";
import CheckBoxGroup from "./CheckBoxGroup";
import {useControlContext} from "../mode/SwitchingModeControl.jsx";

function FormGroup(props) {
    const {mode} = useControlContext()
    return (
        <div className="lightgrey column lg-3">
            <Input {...props}/>
            {mode === 'view' ? null : <CheckBoxGroup {...props}/>}
        </div>
    );
}

export default FormGroup;