import {Link} from 'react-router-dom'
import './Events.css'

const EventCard = ({event}) => {
  console.log(event)

  return (
    <Link to={`/event/${event.id}`}>
      <div className={''}>
        <img className='eventPicture' src={event.imageUrl} alt=""/>
        <div>
        {event.title}
        </div>
      </div>

    </Link>
  )

}

export default EventCard;
