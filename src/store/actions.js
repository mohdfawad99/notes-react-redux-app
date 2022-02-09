const addNote = (text) => {
    return {
        type: "ADD_NOTE",
        text
    }
}

const deleteNote = id => {
    return {
        type: "DELETE_NOTE",
        id
    }
}

const updateSearchText = searchText => {
    return {
        type: "UPDATE_SEARCH_TEXT",
        searchText
    }
}

const toggleDark = () => {
    return {
        type: "TOGGLE_DARK_MODE"
    }
}

export {addNote, deleteNote, updateSearchText, toggleDark}