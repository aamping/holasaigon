import { all, call, fork, select, takeEvery } from 'redux-saga/effects';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import { makeSelectNewEvent } from 'containers/EventsPage/selectors';
import { types, syncEvents } from './actions';

import rsf from '../App/rsf';

function* saveNewEvent() {
  const user = yield select(makeSelectCurrentUser());
  const newEvent = yield select(makeSelectNewEvent());

  yield call(rsf.database.create, 'events', {
    creator: user ? user.uid : null,
    ...newEvent,
  });
}

function* setEventStatus(action) {
  yield call(rsf.database.patch, `events/${action.eventId}`, {
    done: action.done,
  });
}

const eventsTransformer = ({ value }) =>
  Object.keys(value).map(key => ({
    ...value[key],
    id: key,
  }));

function* syncEventsSaga() {
  yield fork(rsf.database.sync, 'events', {
    successActionCreator: syncEvents,
    transform: eventsTransformer,
  });
}

export default function* eventsPageSaga() {
  yield all([
    fork(syncEventsSaga),
    takeEvery(types.EVENTS.NEW.SAVE, saveNewEvent),
    takeEvery(types.EVENTS.SET_STATUS, setEventStatus),
  ]);
}
