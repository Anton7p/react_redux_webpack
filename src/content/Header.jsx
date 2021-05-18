import React from "react";


function Header(props) {
    return (
        <div className=" row">
            <div className="header column lg-12">
                <div className=" row">
                    <div className=" header column xs-8">
                        <div className="header  column xs-5 " onClick={() => props.onClose ? props.onClose() : null}>
                            <span>Word Keeper</span>
                        </div>
                    </div>
                    <div className="header column xs-4">
                        <div className=" row" onClick={() => props.onSelect ? props.onSelect() : null}>
                            <div className="header column xs-12">
                                <div className="star"/>
                                <span>  Starred Words</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;