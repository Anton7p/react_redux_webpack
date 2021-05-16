import * as React from "react";
import {SwitchingModeControl} from "./SwitchingModeControl";
import ViewContent from "../content/ViewContent";
import SelectContent from "../content/SelectContent";


export const Switch = (props) => {
    return (
        <SwitchingModeControl
            view={(onSelect) => <ViewContent   {...props} onSelect={onSelect}/>}
            select={(onClose) => <SelectContent   {...props} onClose={onClose}/>}
        />
    )
}

