/* eslint-disable react/function-component-definition */
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Form from "../../components/Form";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";
import SubLink from "../../components/SubLink";

export default function SignIn() {
  return (
    <MainContainer paddingTop="70px">
      <Title marginBottom="40px">Bem vindo ao GratiBox</Title>
      <Form>
        <div>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
        </div>
        <div>
          <Button>Login</Button>
          <SubLink to="/sign-up">Ainda não sou grato</SubLink>
        </div>
      </Form>
    </MainContainer>
  );
}
