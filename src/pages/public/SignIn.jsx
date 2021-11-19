/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Animate } from "react-simple-animate";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Form from "../../components/Form";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";
import SubLink from "../../components/SubLink";
import { useAuth } from "../../contexts/AuthContext";
import { postSignIn } from "../../services/api/api";
import ErrorMessage from "../../components/ErrorMessage";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const { setUser } = useAuth();

  function handleShowErrorMessage(msg) {
    setErrorMessage(msg);
    setShowErrorMessage(true);
    setTimeout(() => setShowErrorMessage(false), 3000);
  }

  function submitSignIn(event) {
    event.preventDefault();
    if (email.length < 5 || !email.match(/@/)) {
      handleShowErrorMessage("Insira um e-mail válido");
      return;
    }
    if (!password.length) {
      handleShowErrorMessage("A senha não pode ficar em branco");
      return;
    }
    setIsLoading(true);
    postSignIn(email, password)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        setIsLoading(false);
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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              "Login"
            )}
          </Button>
          <SubLink to="/sign-up">Ainda não sou grato</SubLink>
        </div>
      </Form>
    </MainContainer>
  );
}
