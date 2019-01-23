/*
 *
 * EventsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { types } from './actions';

export const initialState = fromJS({
  list: [],
  new: {
    name: '',
    date: '',
    place: '',
    description: '',
  },
  useFirestore: false,
});

function eventsPageReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case types.EVENTS.SYNC:
      return {
        ...state,
        list: action.events,
      };
    case types.EVENTS.NEW.CHANGE:
      return {
        ...state,
        new: { ...state.new, [action.event.key]: action.event.value },
      };
    case types.EVENTS.SET_FIRESTORE:
      return {
        ...state,
        useFirestore: action.useFirestore,
      };
    default:
      return state;
  }
}

export default eventsPageReducer;
