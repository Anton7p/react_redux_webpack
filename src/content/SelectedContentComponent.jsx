import React from "react";
import Title from "./Title.jsx";
import PageContent from "./PageContent.jsx";
import Header from "./Header";

export function SelectedContentComponent(props) {
    return (
        <>
            <Header {...props}/>
            <div className="content row">
                <Title>
                    <PageContent  {...props}/>
                </Title>
            </div>
        </>
    );
}

export default SelectedContentComponent;