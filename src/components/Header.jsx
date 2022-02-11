import { useDispatch, useSelector } from "react-redux"
import { toggleDark } from "../store/actions"

const Header = () => {
    const dispatch = useDispatch()
  const toggleDarkMode = useSelector(state => state.toggleDarkMode)


    return (
        <div className="header">
            <h1>Notes</h1>
            <button className="save" onClick={() => dispatch(toggleDark())}>{toggleDarkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
    )
}

export default Header