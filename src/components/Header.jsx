import { useDispatch } from "react-redux"
import { toggleDark } from "../store/actions"

const Header = () => {
    const dispatch = useDispatch()

    return (
        <div className="header">
            <h1>Notes</h1>
            <button className="save" onClick={() => dispatch(toggleDark())}>Toggle Mode</button>
        </div>
    )
}

export default Header