import {useParams} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux';
import EventCard from './EventCard';
import {registerCurrentEvent, unRegisterCurrentEvent} from '../../store/event';
import './Events.css';


const EventDetails = () => {
  const id = (useParams().id);      // grabs the id of the event from use params
  console.log(id,'----------------------id' )
  const sessionUser = useSelector(state => state.session.user);
  const event = useSelector(state => state.events[id] );
  // console.log(event)

  // console.log(Users, 'this is the first element of the array  ---------') ;
  const dispatch = useDispatch();
  if (!event) return null;

  let registered;

  if (event.Users) {
    const {Users} = event
    registered = Users.find(id => id !== undefined)
  } else {
    registered = false
  }


  function loggedOutUser () {
    let userEvent;

    if (sessionUser) {
      userEvent = {eventId: id, userId: sessionUser.id};
      return (
      <div className='register-btn-container'>
            {!registered ?  <button className='register-Btn' onClick={() => dispatch(registerCurrentEvent(userEvent))}> Register</button> : null}
            {registered ?  <button className='Unregister-Btn' onClick={() => dispatch(unRegisterCurrentEvent(userEvent))}> Unregister</button> : null}
      </div>
      )
    }
  }


  return (
    <div className='picture_info-container'>
      <div className='currentImg-div'>
        <img id='current-event_picture' src={event.imageUrl} alt=""/>
      </div>
      <div className='event-page-details'>
        <div className='eventTitle'>
          {event.title}
        </div>
        <div className='eventDate'>
        {event.time.toString().slice(0,10)}
        </div>
        <div className='event-Page-location'>
          {event.location}
        </div>
        <div className='event-Page-description'>
          {event.description}
        </div>
        <div className='event-Page-ticketCount'>
          Tickets remaining: {event.ticketCount}
        </div>
        {loggedOutUser()}
      </div>
    </div>
  )
}

export default EventDetails;


// <div className='register-btn-container'>
//           {!registered ?  <button className='register-Btn' onClick={() => dispatch(registerCurrentEvent(userEvent))}> Register</button> : null}
//           {registered ?  <button className='Unregister-Btn' onClick={() => dispatch(unRegisterCurrentEvent(userEvent))}> Unregister</button> : null}
//         </div>
