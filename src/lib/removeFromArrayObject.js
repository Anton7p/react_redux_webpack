

export function removeFromArrayObject(array, object, property = "hwi", name = "hw") {
    return array.filter(el => {
            return el[property][name] !== object[property][name];
        }
    );
}