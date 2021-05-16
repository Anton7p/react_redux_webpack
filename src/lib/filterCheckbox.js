

export function filterCheckbox(selected, arr, property = 'fl') {
    if (arr.length === 0) return selected;
    return selected.filter(el => arr.includes(el[property]))
}