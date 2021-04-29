import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import './Events.css';



const EventDetails = () => {
  const id = (useParams().id);      // grabs the id from use params
  const event = useSelector(state => state.events[id] );
  if (!event) return null;

  return (
    <div className='picture_info-container'>
      <div className='currentImg-div'>
        <img id='current-event_picture' src={event.imageUrl} alt=""/>
      </div>
      <div className='event-page-details'>
        <div>
          {event.title}
        </div>
        <div>
          {event.time}
        </div>
        <div className='event-Page-location'>
          {event.location}
        </div>
      </div>
    </div>
  )
}

export default EventDetails;
