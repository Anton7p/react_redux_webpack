// "fl"-property denoting the part of speech of a word in object "selected"

export function filterByCheckboxItem(selected, checkboxItems, setCheckboxItems, property = "fl") {
    if (checkboxItems.length === 0) return selected;

    let currentArray = selected.filter(el => checkboxItems.includes(el[property]));

    // if all words with this part of speech are removed,need to clear checkboxItems
    if (currentArray.length === 0) {
        setCheckboxItems([])
    }
    return currentArray
}