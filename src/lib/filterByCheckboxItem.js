
// "fl"-property denoting the part of speech of a word in object "selected"

export function filterByCheckboxItem(selected, arr, property = "fl") {
    if (arr.length === 0) return selected;
    return selected.filter(el => arr.includes(el[property]));
}