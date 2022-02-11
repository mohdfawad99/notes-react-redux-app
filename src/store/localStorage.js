const loadState = () => {
    try {
        const serialState = localStorage.getItem('appState');
        if (serialState === null) return []
        return JSON.parse(serialState)
    } catch (err) { return [] }
}

const saveState = state => {
    try {
        const serialState = JSON.stringify(state)
        localStorage.setItem('appState', serialState)
    } catch (err) { console.log(err); }
}

export {loadState, saveState}