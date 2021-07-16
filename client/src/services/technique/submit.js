export const submit = (datas, state, setError, message) => {
    datas.map(data => {
        if (state[data] === '' || !state[data]) {
            setError(`all fields are required`)
        }
    })
}