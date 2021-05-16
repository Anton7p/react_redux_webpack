import React from 'react';
import PageContentContainer from "./PageContentContainer.jsx";
import PageContent from "./PageContent.jsx";
import TabPanel from "./TabPanel";

export function SelectContent(props) {
    return (
        <>
            <TabPanel {...props}/>
            <div className="page_content row">
                <PageContentContainer>
                    <PageContent  {...props}/>
                </PageContentContainer>
            </div>
        </>
    );
}

export default SelectContent;