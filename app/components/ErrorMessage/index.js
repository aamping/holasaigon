/**
 * ErrorMessage (Component)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Wrapper from './Wrapper';

function ErrorMessage(props) {
  return (
    <div>
      {props.errorMessage && (
        <Wrapper>
          <p>{props.errorMessage}</p>
        </Wrapper>
      )}
    </div>
  );
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

const mapStateToProps = state => ({
  errorMessage: state.getIn(['global', 'errorMessage']),
});

export default connect(mapStateToProps)(ErrorMessage);
