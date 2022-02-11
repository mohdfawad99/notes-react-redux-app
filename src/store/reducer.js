import { nanoid } from 'nanoid'

const initialState = {
    notes: [
        {
            id: nanoid(),
            text: "This is my first note!",
            date: "2/15/2022",
        },
        {
            id: nanoid(),
            text: "This is my second note!",
            date: "2/16/2022",
        },
        {
            id: nanoid(),
            text: "This is my third note!",
            date: "2/17/2022",
        },
        {
            id: nanoid(),
            text: "This is my fourth note!",
            date: "2/18/2022",
        },
    ],
    searchText: '',
    toggleDarkMode: false
    
}



const notesReducer = (state = initialState, action) => {
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