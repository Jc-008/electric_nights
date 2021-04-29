import {csrfFetch} from './csrf';

// action
const GET_EVENTS = 'events/GET_EVENTS';

const setEvents = events => ({                      // action, just returns an OBJECT
  type : GET_EVENTS,
  events,               // no need to use payload, which is also the object
})


export const getEvents = () => async dispatch => {    // getEvent is the thunk goes and gets data then dispatches the action
  const response = await csrfFetch('/api/events');

  if (response.ok) {
    const data = await response.json();
    dispatch(setEvents(data));         // dispatch to change a state for what is invoked inside
                                          // no need to key in because no object on backend
  }
}


//----------Reducer ----------------------------------------------------------------------------------------//
export default function eventsReducer (state = {}, action) {      // reducers manages change state in an application
  switch (action.type) {
    case GET_EVENTS: {
      const newState = {};
      action.events.forEach(event => {
        newState[event.id] = event            // normalize event id is the key and event is the {object}
      });

      return newState;                    // get put into the store
    }

    default : return state;                 // return newState (how it already is) if the case if not found.
  }
}
