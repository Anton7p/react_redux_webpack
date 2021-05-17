import {checkUniqueObject} from "./checkUniqueObject";


export  function addBackupDataValue(value) {
    let backupData = JSON.parse(localStorage.getItem("backupData"));

    if (!checkUniqueObject(backupData, value)) {
        backupData.push(value);
    }
    localStorage.setItem("backupData", JSON.stringify(backupData));
}

