/**
 *
 * FormPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import A from 'components/A';
// import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';
import Form from 'components/Form';
import { Container, GridItem } from 'components/Grid';
import Input from 'components/Input';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from '../EventsPage/reducer';
import saga from '../EventsPage/saga';

import messages from './messages';
import { saveNewEvent, changeNewEvent } from '../EventsPage/actions';

/* eslint-disable react/prefer-stateless-function */
export class FormPage extends React.Component {
  render() {
    const { onChangeForm, onSaveForm } = this.props;
    return (
      <div>
        <Helmet>
          <title>FormPage</title>
          <meta name="description" content="Description of FormPage" />
        </Helmet>
        <Form onSubmit={e => this.onSubmit(e, this.props.location.pathname)}>
          <Container columns="2">
            <GridItem row="1" col="1 / span 2">
              <ErrorMessage />
            </GridItem>
            <GridItem row="2" col="1 / span 2">
              <Input
                inputType="textOnly"
                name="eventName"
                label="Event's name*"
                placeholder="Event"
                onChange={e =>
                  onChangeForm({ key: 'name', value: e.target.value })
                }
                required
              />
            </GridItem>
            <GridItem row="3" col="1 / span 2">
              <Input
                inputType="numeric"
                name="date"
                label="Date*"
                placeholder="MM/DD/YYYY"
                onChange={e =>
                  onChangeForm({ key: 'date', value: e.target.value })
                }
                required
              />
            </GridItem>
            <GridItem row="4" col="1 / span 2">
              <Input
                inputType="textOnly"
                name="place"
                label="Place*"
                placeholder="Street/number/coordinates"
                onChange={e =>
                  onChangeForm({ key: 'place', value: e.target.value })
                }
                required
              />
            </GridItem>
            <GridItem row="5" col="1 / span 2">
              <Input
                inputType="textOnly"
                name="description"
                label="Description (optional)"
                placeholder="description"
                onChange={e =>
                  onChangeForm({ key: 'description', value: e.target.value })
                }
                required
              />
            </GridItem>
            <GridItem row="6" col="1">
              <button onClick={() => onSaveForm()} type="button">
                Loading!
              </button>
            </GridItem>
            <GridItem row="6" col="2" center>
              {this.props.btnText === 'Signup' ? (
                <A href="/login">SET</A>
              ) : (
                <A href="/signup">GO</A>
              )}
            </GridItem>
            <GridItem row="7" col="1 / span 2">
              <FormattedMessage {...messages.form} />
            </GridItem>
          </Container>
        </Form>
      </div>
    );
  }
}

FormPage.propTypes = {
  onChangeForm: PropTypes.func,
  onSaveForm: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeForm: e => dispatch(changeNewEvent(e)),
    onSaveForm: () => dispatch(saveNewEvent()),
  };
}

const withReducer = injectReducer({ key: 'events', reducer });
const withSaga = injectSaga({ key: 'events', saga });

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FormPage);
