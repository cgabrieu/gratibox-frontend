/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import Loader from "react-loader-spinner";
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

  const { user, setUser } = useAuth();

  function submitSignIn(event) {
    event.preventDefault();
    setErrorMessage('');
    if (email.length < 5 || !email.match(/@/)) {
      setErrorMessage('Insira um e-mail válido');
      return;
    } 
    if (!password.length) {
      setErrorMessage('A senha não pode ficar em branco');
      return;
    }
    setIsLoading(true);
    postSignIn(email, password)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Usuário ou senha inválidos");
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
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
        <div>
          <Button>
            {isLoading
              ? <Loader
                  type="TailSpin"
                  color="#fff"
                  height={30}
                  width={30}
                />
              : "Login"
            }
          </Button>
          <SubLink to="/sign-up">Ainda não sou grato</SubLink>
        </div>
      </Form>
    </MainContainer>
  );
}
