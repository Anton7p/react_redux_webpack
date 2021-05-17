import React from "react";

function CheckBoxItem(props) {

    return (
        <div className="row">
            <div className="column xs-12 ">
                <div className="left column xs-12">
                    <input type="checkbox" onClick={(e) => props.handleCheckbox(e.target.checked, props.name)}/>
                    <span>{props.name}</span>
                </div>
            </div>
        </div>
    );
}

export default CheckBoxItem;