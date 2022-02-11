import { nanoid } from 'nanoid'

const notesReducer = (state, action) => {
    switch(action.type) {
        case "ADD_NOTE":
            const date = new Date()
            return {
                ...state,
                notes: state.notes.concat({
                    id: nanoid(),
                    text: action.text,
                    date: date.toLocaleDateString()
                })
            }

        case "DELETE_NOTE":
            const updatedNotes = state.notes.filter(note => note.id !== action.id)
            return {
                ...state,
                notes: updatedNotes
            }

        case "UPDATE_SEARCH_TEXT":
            return {
                ...state,
                searchText : action.searchText
            }

        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                toggleDarkMode : !state.toggleDarkMode
            }
        
        default:
            return state;
    }
}

export default notesReducer