/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MainContainer from '../../components/MainContainer';
import SubTitle from '../../components/SubTitle';
import Title from '../../components/Title';
import MeditionWomanImage from '../../assets/images/meditation_woman.png';
import Button from '../../components/Button';
import SubLink from '../../components/SubLink';

export default function Home() {
  const navigate = useNavigate();
  return (
    <MainContainer paddingTop="50px">
      <Title marginBottom="20px">Bem-vindo ao GratiBox</Title>
      <SubTitle>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</SubTitle>
      <BackgroundImageHome src={MeditionWomanImage} />
      <HomeFooter>
        <Button onClick={() => navigate('/sign-up')}>Quero começar</Button>
        <SubLink to="/sign-in">Já sou grato</SubLink>
      </HomeFooter>
    </MainContainer>
  );
}

const BackgroundImageHome = styled.img`
  width: 100%;
`;

const HomeFooter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4D65A8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;