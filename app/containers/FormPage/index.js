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
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';
import Form from 'components/Form';
import { Container, GridItem } from 'components/Grid';
import Input from 'components/Input';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FormPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>FormPage</title>
          <meta name="description" content="Description of FormPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <Form onSubmit={e => this.onSubmit(e, this.props.location.pathname)}>
          <Container columns="2">
            <GridItem row="1" col="1 / span 2">
              <ErrorMessage />
            </GridItem>
            <GridItem row="2" col="1 / span 2">
              <Input
                inputType="textOnly"
                name="username"
                label="Name"
                placeholder="Username"
                onChange={e => this.handleInputChange(e)}
                required
              />
            </GridItem>
            <GridItem row="3" col="1 / span 2">
              <Input
                inputType="password"
                name="password"
                label="Password"
                placeholder="••••••••"
                onChange={e => this.handleInputChange(e)}
                required
              />
            </GridItem>
            <GridItem row="4" col="1">
              {this.props.currentlySending ? (
                <Button submit fill color="primary">
                  Loading!
                </Button>
              ) : (
                <Button submit fill color="primary">
                  {this.props.btnText}
                </Button>
              )}
            </GridItem>
            <GridItem row="4" col="2" center>
              {this.props.btnText === 'Signup' ? (
                <A href="/login">Existing User?</A>
              ) : (
                <A href="/signup">New User?</A>
              )}
            </GridItem>
          </Container>
        </Form>
      </div>
    );
  }
}

FormPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(FormPage);
