import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import './Events.css';


const EventList = () => {
  const events = useSelector(state => Object.values(state.events));
  if (events.length === 0) return null;

  return (
    <div className='events-container'>
      {events.map(event => <div key={event.id} className='eventCard'> <EventCard  event = {event}/></div>)}
    </div>
  )
}

export default EventList;
