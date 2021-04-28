import { useSelector } from 'react-redux';
import EventCard from './EventCard';


const EventList = () => {
  const events = useSelector(state => Object.values(state.events));
  if (events.length === 0) return null;

  return (
    <div>
      {events.map(event => <EventCard key={event.id} event = {event}/>)}
    </div>
  )
}

export default EventList;
