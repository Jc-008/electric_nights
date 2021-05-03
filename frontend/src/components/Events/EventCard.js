import {Link} from 'react-router-dom'
import './Events.css'

const EventCard = ({event}) => {
  // console.log(event)

  return (
    <>
      <Link to={`/event/${event.id}`}>
        <img className='eventPicture' src={event.imageUrl} alt=""/>
      </Link>
      <div>
      {event.title}
      </div>
      <div>
      {event.time.toString().slice(0,10)}
      </div>

    </>
  )
}

export default EventCard;
