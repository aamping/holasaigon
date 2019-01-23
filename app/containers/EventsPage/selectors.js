import { createSelector } from 'reselect';
import { initialState } from './reducer';
// import { initialState } from './reducer';

/**
 * Direct selector to the eventsPage state domain
 */

const selectListEvents = state => state.get('events', initialState);

const selectNewEvent = state => state.get('events', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EventsPage
 */
const makeSelectListEvents = () =>
  createSelector(selectListEvents, substate => substate.list);

const makeSelectNewEvent = () =>
  createSelector(selectNewEvent, substate => substate.new);

export { selectNewEvent, makeSelectNewEvent, makeSelectListEvents };
