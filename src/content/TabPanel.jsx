import React from 'react';
import star from "../assets/image/star.svg";

function TabPanel(props) {
    return (
        <div className=" row">
            <div className="lightblue column lg-12">
                <div className=" row">
                    <div className=" lightblue column xs-7">
                        <div className="lightblue button column xs-5 " onClick={() => props.onClose ? props.onClose() : null}>
                            <span>Word Keeper</span>
                        </div>
                    </div>
                    <div className="lightblue column xs-5">
                        <div className=" row">
                            <div className=" lightblue column xs-4">
                                <span>    <div className="star"/></span>
                            </div>
                            <div className="lightblue button column xs-8" onClick={() => props.onSelect ? props.onSelect() : null}>
                                <span>Starred Words</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabPanel;