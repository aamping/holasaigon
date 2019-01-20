import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the eventsPage state domain
 */

const selectEventsPageDomain = state => state.get('eventsPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EventsPage
 */

const makeSelectEventsPage = () =>
  createSelector(selectEventsPageDomain, substate => substate.toJS());

export default makeSelectEventsPage;
export { selectEventsPageDomain };
