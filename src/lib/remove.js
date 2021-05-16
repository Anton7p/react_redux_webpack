

export function remove(state, payload, property = 'hwi', name = 'hw') {
    return state.filter(el => {
            return el[property][name] !== payload[property][name]
        }
    );
}