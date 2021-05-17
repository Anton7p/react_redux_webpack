import React, {useState} from "react";
import list from "../assets/image/list.svg";
import {useControlContext} from "../mode/SwitchingModeControl.jsx";
import {Content} from "../api/contentApi.js";
import {ListRowDescription} from "./ListRowDescription.jsx"

function ListRow({word, add, remove}) {
    const {mode} = useControlContext()

    // information display changes - full information and transcription changes to short information
    const [description, setDescription] = useState(false)

    return (
        <div className="row">
            <div className="column lg-12">
                <div className="lightgrey row">
                    <div className="column lg-12">
                        {mode === "view" ? null : <div className="column lg-1">
                            <img src={list} alt=""/>
                        </div>}
                        <div className="column lg-2" onClick={() => setDescription(!description)}>
                            {Content.Instance.getName(word)}
                        </div>
                        <div className="column lg-2">
                            {Content.Instance.getPartOfSpeech(word)}
                        </div>
                        <div className={`definition column lg-${mode === "view" ? 7 : 6}`}>
                            {description
                                ? Content.Instance.getPronunciation(word)
                                : Content.Instance.getDescription(word)}
                        </div>
                        <div className="column lg-1" onClick={() => {
                            mode === 'view' ? add(word) : remove(word)
                        }}>
                            <div className={`star ${mode === 'view' ? null : "starred"}`}/>
                        </div>
                    </div>
                </div>
                {description
                    ? <ListRowDescription description={Content.Instance.getDescription(word)}/>
                    : null}
            </div>
        </div>

    );
}

export default ListRow;