import { useSelector } from "react-redux";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import store, { initialState } from "./store";
import { saveState } from "./store/localStorage";

function App() {

  store.subscribe(() => saveState({
    notes: store.getState().notes,
    searchText: store.getState().searchText,
    toggleDarkMode: store.getState().toggleDarkMode
  }))

  const notes = useSelector((state) => state.notes);
  const searchText = useSelector(state => state.searchText)
  const toggleDarkMode = useSelector(state => state.toggleDarkMode)
  // console.log(searchText);

  return (
    <div className={toggleDarkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header />
        <Search />
        <NotesList notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} />
      </div>
    </div>
  );
}

export default App;