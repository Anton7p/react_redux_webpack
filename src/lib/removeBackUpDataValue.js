import {remove} from "./remove";


export function removeBackUpDataValue(value) {
    let backUpData = JSON.parse(localStorage.getItem("backUpData"));
    backUpData = remove(backUpData, value)
    localStorage.setItem('backUpData', JSON.stringify(backUpData));
}

