import React from "react";


export function ListRowDescription(props) {

    return (
            <div className="content_group row">
                <div className="content_group__description column lg-12">
                    {props.description}
                </div>
            </div>
    );
}

