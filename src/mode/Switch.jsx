import * as React from "react";
import {SwitchingModeControl} from "./SwitchingModeControl.jsx";
import ViewContentComponent from "../content/ViewContentComponent";
import SelectedContentComponent from "../content/SelectedContentComponent";


export const Switch = (props) => {
    return (
        <SwitchingModeControl
            view={(onSelect) => <ViewContentComponent   {...props} onSelect={onSelect}/>}
            select={(onClose) => <SelectedContentComponent   {...props} onClose={onClose}/>}
        />
    )
}

