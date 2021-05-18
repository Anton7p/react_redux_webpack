import React from "react";

function Title(props) {
    return (
        <>
            <div className="column lg-12">
                <div className="content_title row">
                       <b>Starred Words</b>
                </div>
            </div>
            {props.children}
        </>
    );
}

export default Title;