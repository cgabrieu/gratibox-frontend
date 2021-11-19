import styled from "styled-components";

export default styled.input`
max-width: 325px;
height: 64px;
background: #ffffff;
width: 100%;
border: 1px solid #604848;
border-radius: 10px;
outline: none;
margin-bottom: 8px;
color: #464343;
font-size: 24px;
font-weight: 500;
padding: 0 15px;
&::placeholder {
  color: #bfb6b6;
}
@media(max-width: 325px) {
  width: 100%;
  border-radius: 0px;
}
`;