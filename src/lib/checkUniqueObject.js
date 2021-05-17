
// object["hwi"]["hw"]-property denoting name of a word from array

export function checkUniqueObject(state, payload, property="hwi", name="hw") {
        let selected = state.filter(el => {
                if (!el[property]) return false;
                return el[property][name] === payload[property][name];
            }
        );
    return selected.length === 1;
}