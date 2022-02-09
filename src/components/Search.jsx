
import { MdSearch } from "react-icons/md"
import { useDispatch } from "react-redux";
import { updateSearchText } from "../store/actions";

const Search = () => {
    const dispatch = useDispatch()

    return (
        <div className="search">
            <MdSearch className="search-icon" size='1.3rem' />
            <input type="text" placeholder="type to search" onChange={e => dispatch(updateSearchText(e.target.value))}/>
        </div>
    )
}

export default Search;