import React, {useContext} from "react";


export const PageModeEnum = {
    View: 'view',
    Select: 'select',
};

export const ControlContext = React.createContext(PageModeEnum.View);


export function useControlContext() {
    return useContext(ControlContext);
}


export function SwitchingModeControl(props) {
    let [mode, setMode] = React.useState(PageModeEnum.View);


    const handleView = () => {
        setMode(PageModeEnum.View);
    };
    const handleSelect = () => {
        setMode(PageModeEnum.Select);
    };

    if (mode === PageModeEnum.Select ) {
        return (
            <ControlContext.Provider value={{mode}}>
                {props.select(() => handleView())}
            </ControlContext.Provider>);
    }
    return (
        <ControlContext.Provider value={{mode}}>
            {props.view(() => handleSelect())}
        </ControlContext.Provider>);
}

