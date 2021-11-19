/* eslint-disable react/function-component-definition */
import styled from 'styled-components';

export default styled.div`
  max-width: 375px;
  border: 1px red solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  padding-top: ${({ paddingTop }) => paddingTop};
`;
