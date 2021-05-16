import {uniqueObject} from "./uniqueObject";


export  function addBackUpDataValue(value) {
    let backUpData = JSON.parse(localStorage.getItem("backUpData"));

    if (!uniqueObject(backUpData, value)) {
        backUpData.push(value)
    }
    localStorage.setItem('backUpData', JSON.stringify(backUpData));
}

