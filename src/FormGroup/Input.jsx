import React from "react";
import {handleKeyDown} from "../lib/handleKeyDown";
import {useControlContext} from "../mode/ModeControl.jsx";
import img from "../assets/image/search.svg"

function Input(props) {
    const {mode} = useControlContext();
    return (
        <div className="row">
            <div className=" column lg-12">
                <div className="input">
                    <input
                        defaultValue={''}
                        placeholder=''
                        type="text"
                        onChange={e =>  props.setInputValue(e.target.value)}
                        onKeyDown={(e) => mode === "view" ? handleKeyDown(e, (defaultValue) => props.downloadData(defaultValue)) : null}
                    />
                    {mode === "view"
                        ?  <span className="input_img" onClick={props.handleClick}>
                              <img src={img} alt=""/>
                           </span>
                        :   null}
                </div>
            </div>
        </div>
    );
}

export default Input;