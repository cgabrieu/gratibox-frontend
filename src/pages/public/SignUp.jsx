/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Form from "../../components/Form";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";
import SubLink from "../../components/SubLink";
import { postSignUp } from "../../services/api/api";
import ErrorMessage from "../../components/ErrorMessage";

export default function SignUp() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function handleShowErrorMessage(msg) {
    setErrorMessage(msg);
    setShowErrorMessage(true);
    setTimeout(() => setShowErrorMessage(false), 3000);
  }

  function submitSignIn(event) {
    event.preventDefault();
    if (userInfo.email.length < 5 || !userInfo.email.match(/@/)) {
      handleShowErrorMessage("Insira um e-mail válido");
      return;
    }
    if (!password.length) {
      handleShowErrorMessage("A senha não pode ficar em branco");
      return;
    }
    setIsLoading(true);
    postSignUp(userInfo)
      .then((res) => {
        setIsLoading(false);
        navigate("/sign-in");
      })
      .catch(() => {
        handleShowErrorMessage("Usuário ou senha inválidos");
        setIsLoading(false);
      });
  }

  return (
    <MainContainer paddingTop="70px">
      <Title marginBottom="40px">Bem vindo ao GratiBox</Title>
      <Form onSubmit={submitSignIn}>
        <div>
          <Input
            placeholder="Nome"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={userInfo.password}
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          />
          <Input
            placeholder="Confirmar Senha"
            type="password"
            value={userInfo.passwordRepeat}
            onChange={(e) => setUserInfo({ ...userInfo, passwordRepeat: e.target.value })}
          />
          <Animate
            play={showErrorMessage}
            start={{ opacity: 0 }} end={{ opacity: 1 }}
          >
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </Animate>
        </div>
        <div>
          <Button>
            {isLoading ? (
              <Loader type="TailSpin" color="#fff" height={30} width={30} />
            ) : (
              "Cadastre-se"
            )}
          </Button>
          <SubLink to="/sign-in">Já sou grato</SubLink>
        </div>
      </Form>
    </MainContainer>
  );
}
