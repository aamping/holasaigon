/**
 * Form (Styled Component)
 */

import styled from 'styled-components';
import * as style from 'components/Variables';

const Form = styled.form`
  background-color: ${style.color.gray};
  border: 1px solid ${style.color.gray.light};
  margin: 1em auto;
  padding: 1em;
  text-align: center;
  width: 350px;
`;

export default Form;
