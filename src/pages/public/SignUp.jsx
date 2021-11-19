/* eslint-disable react/function-component-definition */
import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";

export default function SignUp() {
  return (
    <MainContainer paddingTop="70px">
      <Title marginBottom="40px">Bem vindo ao GratiBox</Title>
      <Form>
        <div>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha"/>
        </div>
        <Button>Login</Button>
      </Form>
    </MainContainer>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 340px;
`;

const Input = styled.input`
  max-width: 325px;
  height: 64px;
  background: #ffffff;
  width: 100%;
  border: 1px solid #604848;
  border-radius: 10px;
  outline: none;
  margin-bottom: 8px;
  color: #604848;
  font-size: 24px;
  font-weight: 500;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
