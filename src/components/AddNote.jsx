import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../store/actions";

const AddNote = () => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const dispatch = useDispatch();

  const saveNoteHandler = () => {
    if (noteText.trim().length >= 0) {
      dispatch(addNote(noteText));
    }
    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add note..."
        value={noteText}
        onChange={(e) => {
          if (characterLimit - e.target.value.length >= 0)
            setNoteText(e.target.value);
        }}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={saveNoteHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
