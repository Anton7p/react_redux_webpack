
export function handleKeyDown(event, callback) {
    if (event && event.key === 'Enter') {
        callback(event.target.value)
        event.preventDefault()
    }
}