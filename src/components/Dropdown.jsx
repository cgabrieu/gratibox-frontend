/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React from "react";
import styled from "styled-components";
import { useAnimate } from "react-simple-animate";
import { ReactComponent as ArrowDownIcon } from "../assets/icons/arrow.svg";

export default function Dropdown({ name, children }) {
  const { play, style, isPlaying } = useAnimate({
    start: { height: 0, opacity: 0 },
    end: { height: "50px", opacity: 1 },
  });

  return (
    <DropdownContainer>
      <HeaderDropdown onClick={() => play(!isPlaying)}>
        <p>{name}</p>
        {isPlaying || <ArrowDownIcon />}
      </HeaderDropdown>
      <CheckboxesContainer style={style}>{children}</CheckboxesContainer>
    </DropdownContainer>
  );
}

const CheckboxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  > div {
    display: flex;
    margin: 5px 5px;
    > input {
      margin-right: 5px;
    }
    > p {
      color: #4D65A8;
      font-size: 16px;
    }
  }
`;

const HeaderDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-weight: bold;
    font-size: 18px;
    color: #4d65a8;
  }
`;

const DropdownContainer = styled.div`
  background: rgba(224, 209, 237, 0.62);
  border-radius: 5px;
  max-width: 290px;
  margin: 0 auto;
  padding: 9px;
  margin-bottom: 5px;
`;
