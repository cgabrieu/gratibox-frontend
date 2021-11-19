/* eslint-disable react/function-component-definition */
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Form from "../../components/Form";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";
import SubLink from "../../components/SubLink";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <MainContainer paddingTop="70px">
      <Title marginBottom="40px">Bem vindo ao GratiBox</Title>
      <Form>
        <div>
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirmar senha" />
          {errorMessage}
        </div>
        <div>
          <Button>Cadastrar</Button>
          <SubLink to="/sign-in">Já sou grato</SubLink>
        </div>
      </Form>
    </MainContainer>
  );
}
