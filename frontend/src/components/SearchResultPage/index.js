import { useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import EventCard from '../Events/EventCard.js'
import "./SearchResultPage.css"

function SearchResultPage() {
  const eventSearch = useSelector(state => state.search.results);
  // console.log(eventSearch)
  const history = useHistory();             // maybe use history ?

  // I will need map it thru

  const searchResults = eventSearch?.map(event => {
    return <EventCard event={event} key={event.id} />
  })

  return (
    <div>
      <div className='eventCard-container'>
        {searchResults}
      </div>
    </div>
  )
}

export default SearchResultPage;

// 20 is render the card of elements into the page
