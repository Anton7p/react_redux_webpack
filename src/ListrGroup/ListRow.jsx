import React, {useState} from 'react';
import list from "../assets/image/list.svg";
import star from "../assets/image/star.svg";
import {useControlContext} from "../ModeControl/SwitchingModeControl.jsx";
import {Value} from "../lib/getValue.js";
import {ListRowDescription} from './ListRowDescription.jsx'

function ListRow({word, add, remove}) {
    const {mode} = useControlContext()

    // information display changes - full information and transcription changes to short information
    const [description, setDescription] = useState(false)

    return (
        <div className="row">
            <div className="column lg-12">
                <div className="row">
                    <div className="column lg-12">
                        {mode === 'view' ? null : <div className="column lg-1">
                            <img src={list} alt=""/>
                        </div>}
                        <div className="column lg-2" onClick={() => setDescription(!description)}>
                            {Value.Instance.getName(word)}
                        </div>
                        <div className="column lg-2">
                            {Value.Instance.getPartOfSpeech(word)}
                        </div>
                        <div className={`definition column lg-${mode === 'view' ? 7 : 6}`}>
                            {description
                                ? Value.Instance.getPronunciation(word)
                                : Value.Instance.getDescription(word)}
                        </div>
                        <div className="column lg-1" onClick={() => {
                            mode === 'view' ? add(word) : remove(word)
                        }}>
                            <div className="star"/>
                        </div>
                    </div>
                </div>
                {description
                    ? <ListRowDescription description={Value.Instance.getDescription(word)}/>
                    : null}
            </div>
        </div>

    );
}

export default ListRow;