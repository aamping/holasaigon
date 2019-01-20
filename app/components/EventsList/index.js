import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import EventListItem from 'containers/EventListItem';

function EventsList({ loading, error, events }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (events !== false) {
    return <List items={events} component={EventListItem} />;
  }

  return null;
}

EventsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  events: PropTypes.any,
};

export default EventsList;
