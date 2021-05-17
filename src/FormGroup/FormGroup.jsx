import React from "react";
import Input from "./Input.jsx";
import CheckBox from "./CheckBox";
import {useControlContext} from "../mode/ModeControl.jsx";

function FormGroup(props) {
    const {mode} = useControlContext();
    return (
        <div className="lightgrey column lg-3">
            <Input {...props}/>
            {mode === "view" ? null : <CheckBox {...props}/>}
        </div>
    );
}

export default FormGroup;