import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';



const EventDetails = () => {
  const id = (useParams().id);      // grabs the id from use params
  const event = useSelector(state => state.events[id] );
  if (!event) return null;

  return (
    <div>
      <h3>
        {event.title}
      </h3>
    </div>
  )
}

export default EventDetails;
