import React from 'react';
import {handleKeyDown} from "../lib/handleKeyDown";
import {useControlContext} from "../ModeControl/SwitchingModeControl";


function Input(props) {
    const {mode} = useControlContext()
    return (
        <div className="row">
            <div className=" column lg-12">
                <input
                    defaultValue={''}
                    placeholder=''
                    type="text"
                    onChange={e => mode !== 'view' ? props.setText(e.target.value) : null}
                    onKeyDown={(e) => mode === 'view' ? handleKeyDown(e, (defaultValue) => props.setValue(defaultValue)) : null}
                />
            </div>
        </div>
    );
}

export default Input;