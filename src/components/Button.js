import styled from 'styled-components';

export default styled.button`
  width: 220px;
  height: 56px;
  border: none;
  outline: none;
  padding: 16px;
  background-color: #8C97EA;
  color: #FFF;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 220px) {
    width: 100%;
    border-radius: 0px;
  }
`;
