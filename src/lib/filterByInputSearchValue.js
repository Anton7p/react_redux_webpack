

export function filterByInputSearchValue(array, text, property = "hwi", name = "hw") {

    if (text === ' ') {
        return array;
    }
   return array.filter(el => {
        let value = el[property][name];

        return value
            .toLowerCase()
            .split(' ')
            .join('')
            .indexOf(text.toLowerCase()) !== -1;
    })

}