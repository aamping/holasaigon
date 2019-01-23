/**
 *
 * EventsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import EventsList from 'components/EventsList';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import H2 from 'components/H2';
import { makeSelectError, makeSelectLoading } from 'containers/App/selectors';
import CenteredSection from './CenteredSection';
import Section from './Section';

import { makeSelectListEvents } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { login, logout } from '../App/actions';
import { saveNewEvent } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class EventsPage extends React.Component {
  render() {
    const { loading, error, events } = this.props;
    const eventsListProps = {
      loading,
      error,
      events,
    };
    console.log(events);
    return (
      <article>
        <Helmet>
          <title>EventsPage</title>
          <meta name="description" content="Description of EventsPage" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            {events ? <EventsList {...eventsListProps} /> : null}
          </Section>
        </div>
        <button type="button" onClick={this.props.onSaveNewEvent}>
          SaveEvent
        </button>
        <button type="button" onClick={this.props.onLogin}>
          Login
        </button>
        <button type="button" onClick={this.props.onLogout}>
          Logout
        </button>
      </article>
    );
  }
}

EventsPage.propTypes = {
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  onSaveNewEvent: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  events: makeSelectListEvents(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: () => dispatch(login()),
    onLogout: () => dispatch(logout()),
    onSaveNewEvent: () => dispatch(saveNewEvent()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'events', reducer });
const withSaga = injectSaga({ key: 'events', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventsPage);
