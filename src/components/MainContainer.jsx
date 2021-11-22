/* eslint-disable react/function-component-definition */
import styled from 'styled-components';

export default styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  padding-top: ${({ paddingTop }) => paddingTop};
`;
