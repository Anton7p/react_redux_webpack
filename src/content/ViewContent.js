import React from 'react';
import PageContent from "./PageContent";
import TabPanel from "./TabPanel";


export function ViewContent(props) {
    return (
        <>
            <TabPanel {...props}/>
            <div className="page_content row">
                <PageContent  {...props}/>
            </div>
        </>
    );
}

export default ViewContent;