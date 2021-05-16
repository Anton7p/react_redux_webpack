import React from 'react';

function CheckBoxItem(props) {

    return (
        <div className=" row">
            <div className=" column xs-12 ">
                <div className="  column xs-3">
                    <input type="checkbox" onClick={(e) => props.handleCheckbox(e.target.checked, props.name)}/>
                </div>
                <div className=" column xs-9 ">
                    {props.name}
                </div>
            </div>
        </div>
    );
}

export default CheckBoxItem;