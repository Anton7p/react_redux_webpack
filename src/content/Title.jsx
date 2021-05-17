import React from "react";

function Title(props) {
    return (
        <>
            <div className="column lg-12">
                <div className="title row">
                    <span>Starred Words</span>
                </div>
            </div>
            {props.children}
        </>
    );
}

export default Title;