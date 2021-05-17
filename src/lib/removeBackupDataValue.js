import {removeFromArrayObject} from "./removeFromArrayObject";


export function removeBackupDataValue(value) {
    let backupData = JSON.parse(localStorage.getItem("backupData"));
    backupData = removeFromArrayObject(backupData, value);
    localStorage.setItem("backupData", JSON.stringify(backupData));
}

