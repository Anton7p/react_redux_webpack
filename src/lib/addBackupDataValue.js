import {uniqueObject} from "./uniqueObject";


export  function addBackupDataValue(value) {
    let backupData = JSON.parse(localStorage.getItem("backupData"));

    if (!uniqueObject(backupData, value)) {
        backupData.push(value)
    }
    localStorage.setItem('backupData', JSON.stringify(backupData));
}

