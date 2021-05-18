import React from "react";
import {handleKeyDown} from "../lib/handleKeyDown";
import {useControlContext} from "../mode/ModeControl.jsx";
import img from "../assets/image/search.svg"

function Input(props) {
    const {mode} = useControlContext();
    return (
        <div className="row">
            <div className=" column lg-12">
                <div className="group_input">
                    <input className="group_input__custom_input"
                           defaultValue={''}
                           type="text"
                           onChange={e =>  props.setInputValue(e.target.value)}
                           onKeyDown={(e) => mode === "view" ? handleKeyDown(e, (defaultValue) => props.downloadData(defaultValue)) : null}
                         />
                    <label htmlFor="group_input__custom_input">{props.name}</label>
                    {mode === "view"
                        ?  <span className="group_input__search_image" onClick={props.handleClick}>
                              <img src={img} alt=""/>
                           </span>
                        :   null}
                </div>
            </div>
        </div>
    );
}

export default Input;