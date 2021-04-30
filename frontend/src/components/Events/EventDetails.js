import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import './Events.css';


const EventDetails = () => {
  const id = (useParams().id);      // grabs the id of the event from use params
  // const sessionUser = useSelector(state => state.session.user);
  const event = useSelector(state => state.events[id] );
  const {Users} = event
  // console.log(Users, 'this is the first element of the array  ---------') ;

  if (!event) return null;

  const registered = Users.find(id => id !== undefined)


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
      <div>
        {!registered ?  <button className='register-Btn'> Register</button> : null}
      </div>
    </div>
  )
}

export default EventDetails;
