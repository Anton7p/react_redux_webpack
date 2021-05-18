import React from "react";
import Input from "./Input.jsx";
import Checkbox from "./Checkbox";
import {useControlContext} from "../mode/ModeControl.jsx";

function FormGroup(props) {
    const {mode} = useControlContext();
    return (
        <div className="content_group column lg-3">
            <Input {...props}/>
            {mode === "view" ? null : <Checkbox {...props}/>}
        </div>
    );
}

export default FormGroup;