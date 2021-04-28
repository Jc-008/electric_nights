import {Link} from 'react-router-dom'

const EventCard = ({event}) => {
  console.log(event)

  return (
    <Link to={`/event/${event.id}`}>
      <img src={event.imageUrl} alt=""/>
      <div>
      {event.title}
      </div>

    </Link>
  )

}

export default EventCard;
