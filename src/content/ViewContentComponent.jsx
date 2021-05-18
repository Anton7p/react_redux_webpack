import React from "react";
import PageContent from "./PageContent.jsx";
import Header from "./Header.jsx";


export function ViewContentComponent(props) {
    return (
        <>
            <Header {...props}/>
            <div className="content row">
                <PageContent  {...props}/>
            </div>
        </>
    );
}

export default ViewContentComponent;