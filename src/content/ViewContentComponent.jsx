import React from "react";
import PageContent from "./PageContent.jsx";
import Header from "./Header.jsx";


export function ViewContentComponent(props) {
    return (
        <>
            <Header {...props}/>
            <div className="page_content row">
                <PageContent  {...props}/>
            </div>
        </>
    );
}

export default ViewContentComponent;