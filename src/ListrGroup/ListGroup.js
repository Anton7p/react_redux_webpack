import React, {useEffect, useState} from 'react';
import ListRow from "./ListRow";
import {sortCard} from "../lib/sortCard";


function ListGroup({words, add, remove}) {

    let [cardList, setCardList] = useState([])
    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(e, word) {
        setCurrentCard(word)
    }

    function dragOverHandler(e) {
        e.preventDefault()
    }

    function dropHandler(e, word) {
        e.preventDefault()
        setCardList(cardList.map(el => {
            if (el.id === word.id) {
                return {...el, order: currentCard.order}
            }
            if (el.id === currentCard.id) {
                return {...el, order: word.order}
            }
            return el
        }))
    }

    useEffect(() => {
        if (words) {
            const cardList = JSON.parse(JSON.stringify(words))
            cardList.forEach((el, idx) => {
                el.id = idx;
                el.order = idx
            })
            setCardList(cardList)
        }
    }, [words])


    return (
        <div className="column lg-9">
            {cardList.length > 0
                ? cardList.sort(sortCard).map((word, idx) => {
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
                : 'There is nothing here'
            }
        </div>
    );
}

export default ListGroup;