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

  console.log(registered)

  // use use state user.find as inital value,

  // console.log(registered, '-------- registered ')

  // const registeringEvent = ()  => {
  //   dispatch(registerCurrentEvent(id,sessionUser.id))
  // }
  const userEvent = {eventId: id, userId: sessionUser.id};

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
        <div className='register-btn-container'>
          {!registered ?  <button className='register-Btn' onClick={() => dispatch(registerCurrentEvent(userEvent))}> Register</button> : null}
          {registered ?  <button className='Unregister-Btn' onClick={() => dispatch(unRegisterCurrentEvent(userEvent))}> Unregister</button> : null}
        </div>
      </div>
    </div>
  )
}

export default EventDetails;
