import React from 'react';
import Input from "./Input";
import CheckBoxGroup from "./CheckBoxGroup";
import {useControlContext} from "../ModeControl/SwitchingModeControl";

function FormGroup(props) {
    const {mode} = useControlContext()
    return (
        <div className="column lg-3">
            <Input {...props}/>
            {mode === 'view' ? null : <CheckBoxGroup {...props}/>}
        </div>
    );
}

export default FormGroup;