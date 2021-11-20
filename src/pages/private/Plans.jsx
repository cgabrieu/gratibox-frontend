/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "../../components/MainContainer";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { useAuth } from "../../contexts/AuthContext";

export default function Plans() {
  const { user } = useAuth();

  return (
    <MainContainer paddingTop="70px">
      <Title>Bom te ver por aqui, {user.name.split(" ")[0]}.</Title>
      <SubTitlePlans>
        Você ainda não assinou um plano, que tal começar agora?
      </SubTitlePlans>
      Não deu
    </MainContainer>
  );
}

const SubTitlePlans = styled(SubTitle)`
  text-align: left;
`;