import React, {useEffect, useState} from "react";
import ListRow from "./ListRow.jsx";
import {sortCard} from "../lib/sortCard";

/**
 * This component renders a list of words, adding event handlers to each word
 * The drag and drop function implements  by sorting by order.
 * Order and id add to the copied array to each object
 */

function ListGroup({words, add, remove}) {

    let [cardList, setCardList] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);

    function dragStartHandler(e, word) {
        setCurrentCard(word);
    }

    function dragOverHandler(e) {
        e.preventDefault();
    }

    function dropHandler(e, word) {
        e.preventDefault();
        setCardList(cardList.map(el => {
            if (el.id === word.id) {
                return {...el, order: currentCard.order};
            }
            if (el.id === currentCard.id) {
                return {...el, order: word.order};
            }
            return el
        }));
    }

    useEffect(() => {
        if (words) {
            const cardList = JSON.parse(JSON.stringify(words));
            cardList.forEach((el, idx) => {
                el.id = idx;
                el.order = idx
            });
            setCardList(cardList);
        }
    }, [words]);


    return (
        <div className="column lg-9">
            {cardList.length > 0
                ?
                cardList.sort(sortCard).map((word, idx) => {
                    return <div key={idx}
                                onDragStart={(e) => dragStartHandler(e, word)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, word)}
                                draggable={true}>
                        <ListRow
                            word={word}
                            add={add}
                            remove={remove}/>
                    </div>})
                :
                <div className="column lg-12">
                    <div className="row">
                        <div className="content_group column lg-12">
                            <span>There is nothing here</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ListGroup;