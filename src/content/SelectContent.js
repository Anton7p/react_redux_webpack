import React from 'react';
import PageContentContainer from "./PageContentContainer";
import PageContent from "./PageContent";
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