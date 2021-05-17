import  React from "react";
import {ModeControl} from "./ModeControl.jsx";
import ViewContentComponent from "../content/ViewContentComponent";
import SelectedContentComponent from "../content/SelectedContentComponent";


export const Switch = (props) => {
    return (
        <ModeControl
            view={(onSelect) => <ViewContentComponent   {...props} onSelect={onSelect}/>}
            select={(onClose) => <SelectedContentComponent   {...props} onClose={onClose}/>}
        />
    )
}

