import { createStore } from "redux";
import notesReducer from "./reducer";
import { nanoid } from 'nanoid'
import { loadState } from "./localStorage";

const persistedState = loadState()

export const initialState = {
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
    toggleDarkMode: false,
    ...persistedState
}

const store = createStore(notesReducer, initialState)
export default store