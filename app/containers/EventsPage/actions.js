export const types = {
  EVENTS: {
    SYNC: 'EVENTS.SYNC',
    SET_STATUS: 'EVENTS.SET_STATUS',
    NEW: {
      CHANGE: 'EVENTS.NEW.CHANGE',
      SAVE: 'EVENTS.NEW.SAVE',
    },
    SET_FIRESTORE: 'EVENTS.SET_FIRESTORE',
  },
};

export const syncEvents = events => ({
  type: types.EVENTS.SYNC,
  events,
});

export const changeNewEvent = event => ({
  type: types.EVENTS.NEW.CHANGE,
  event,
});

export const saveNewEvent = () => ({
  type: types.EVENTS.NEW.SAVE,
});

export const setEventStatus = (eventId, done) => ({
  type: types.EVENTS.SET_STATUS,
  eventId,
  done,
});

export const setFirestore = useFirestore => ({
  type: types.EVENTS.SET_FIRESTORE,
  useFirestore,
});
