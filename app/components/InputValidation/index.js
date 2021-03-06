/* eslint-disable react/prefer-stateless-function */
/**
 * Input
 */

import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import Icon from './Icon';
import Wrapper from './Wrapper';

class InputValidation extends React.Component {
  render() {
    let validation;

    if (this.props.visible) {
      if (this.props.loading) {
        validation = <Loading label={this.props.label} />;
      } else {
        // eslint-disable-next-line no-lonely-if
        if (this.props.valid) {
          validation = (
            <Wrapper label={this.props.label}>
              <Icon
                className="fa fa-med fa-check"
                style={{ lineHeight: '24px' }}
                color="secondary"
              />
            </Wrapper>
          );
        } else {
          validation = (
            <Wrapper label={this.props.label}>
              <Icon
                className="fa fa-med fa-exclamation-circle"
                style={{ lineHeight: '24px' }}
                color="gray"
              />
            </Wrapper>
          );
        }
      }
    }

    return <div>{validation}</div>;
  }
}

InputValidation.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  valid: PropTypes.bool,
  visible: PropTypes.bool,
};

export default InputValidation;
