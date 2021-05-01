import { csrfFetch } from './csrf';

const LOADRESULT= 'search/LOADRESULT'

const loadResult = list => ({
  type: LOADRESULT,
  list,                           // list is the list of result from the back end
});


//-------------------THUNK--------------------------//

export const searchFunc = (param) => async dispatch => {      // param is the searchTerm that a person searches for

  const response = await csrfFetch(`/api/search/${param}`);
                                      // /api/search/A-List
  if (response.ok) {
    const searchResults = await response.json();    // jsonifed  searchResult, litterally
    dispatch(loadResult(searchResults))
    return searchResults;
  }
}


//-------------------REDUCER--------------------------//

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case LOADRESULT:
      const newState = {}
      action.list.forEach((search) => {
        newState[search.id] = search;                 // normalized
      })

      return newState;
    default:
      return state;
  }
}


export default searchReducer;
