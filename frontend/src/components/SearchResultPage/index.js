import { useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import "./SearchResultPage.css"

function SearchResultPage() {
  const eventSearch = useSelector(state => state.search);
  const history = useHistory();             // maybe use history ?

  return (
    <div>
      <ul>
        {console.log(eventSearch)}

      </ul>
    </div>
  )
}

export default SearchListPage;
