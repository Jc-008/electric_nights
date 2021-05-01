import {csrfFetch} from './csrf';

// ACTIONS
const GET_EVENTS = 'events/GET_EVENTS';
const REGISTER_EVENTS = 'events/REGISTER_EVENTS'

const setEvents = events => ({                      // action, just returns an OBJECT
  type : GET_EVENTS,
  events,               // no need to use payload, which is also the object
})

const registerEvent = events => ({            // want to create register events but gotta make sure this is correct
  type: REGISTER_EVENTS,
  events,
})




// ------------------------------------------THUNKS(async actions)---------------------------------------------------------------//

// get all EVENTS
export const getEvents = () => async dispatch => {    // getEvent is the thunk goes and gets data then dispatches the action
  const response = await csrfFetch('/api/events');

  if (response.ok) {
    const data = await response.json();

    dispatch(setEvents(data));         // dispatch to change a state for what is invoked inside
                                          // no need to key in because no object on backend
  }
}

// Register EVENT
export const registerCurrentEvent = (userEvent) => async dispatch => {

  const response = await csrfFetch('/api/events', {
    method: 'POST',
    // headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(userEvent)                           // stringify the data that was
  })

  if (response.ok) {
    const event = await response.json();
    console.log(event, '------ event------>')
    dispatch(registerEvent(event))            // dispatching to change the state for the event that has been json'ed
  }
}


//--------------------------------------------Reducer --------------------------------------------------------------//
export default function eventsReducer (state = {}, action) {      // reducers manages change state in an application
  switch (action.type) {
    case GET_EVENTS: {
      const newState = {};
      action.events.forEach(event => {
        newState[event.id] = event            // normalize event id is the key and event is the {object}
      });

      return newState;                    // get put into the store
    }
    case REGISTER_EVENTS: {
      let newEventState = {...state}
      newEventState[action.events.id] = action.events;
      return newEventState;
    }

    default : return state;                 // return newState (how it already is) if the case if not found.
  }
}
