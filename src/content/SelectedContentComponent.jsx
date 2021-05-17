import React from 'react';
import PageContentContainer from "./PageContentContainer.jsx";
import PageContent from "./PageContent.jsx";
import Header from "./Header";

export function SelectedContentComponent(props) {
    return (
        <>
            <Header {...props}/>
            <div className="page_content row">
                <PageContentContainer>
                    <PageContent  {...props}/>
                </PageContentContainer>
            </div>
        </>
    );
}

export default SelectedContentComponent;