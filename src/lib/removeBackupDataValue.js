import {remove} from "./remove";


export function removeBackupDataValue(value) {
    let backupData = JSON.parse(localStorage.getItem("backupData"));
    backupData = remove(backupData, value)
    localStorage.setItem('backupData', JSON.stringify(backupData));
}

