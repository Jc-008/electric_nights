import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import './Events.css';


const EventList = () => {
  const events = useSelector(state => Object.values(state.events));
  if (events.length === 0) return null;

  return (
    <div className='events-container'>
      {events.map(event => <div className='eventCard'> <EventCard key={event.id} event = {event}/></div>)}
    </div>
  )
}

export default EventList;
