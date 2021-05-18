import React from "react";

function CheckboxItem(props) {

    return (
        <div className="row">
            <div className="column xs-12 ">
                <div className="column xs-12">
                    <div className="group_checkbox">
                        <input className="group_checkbox__custom_checkbox"
                               type="checkbox"
                               id={props.name}
                               onClick={(e) => props.handleCheckbox(e.target.checked, props.name)}
                               value={props.name}
                        />
                        <label htmlFor={props.name}>{props.name}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckboxItem;