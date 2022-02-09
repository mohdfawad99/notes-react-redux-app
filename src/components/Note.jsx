import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteNote } from "../store/actions";

const Note = ({ text, date, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => dispatch(deleteNote(id))}
        />
      </div>
    </div>
  );
};

export default Note;
