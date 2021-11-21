/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import MainContainer from "../../components/MainContainer";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { useAuth } from "../../contexts/AuthContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MeditionWomanImage from "../../assets/images/woman-plans.png";
import MeditionWomanImage2 from "../../assets/images/woman-plans-2.png";
import Button from "../../components/Button";

export default function Plans() {
  const { user } = useAuth();

  return (
    <MainContainer paddingTop="15%">
      <PlansContainer>
        <TitlePlans>Bom te ver por aqui, {user.name.split(" ")[0]}.</TitlePlans>
        <SubTitlePlans>
          Você ainda não assinou um plano, que tal começar agora?
        </SubTitlePlans>
        <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          <BoxInfoContainer>
            <img src={MeditionWomanImage} alt="Woman Meditating" />
            <TextBoxInfo>
              Você recebe um box por semana.
              <br /> <br />
              Ideal para quem quer exercer a gratidão todos os dias.
            </TextBoxInfo>
            <ButtonBoxInfo>Assinar</ButtonBoxInfo>
          </BoxInfoContainer>
          <BoxInfoContainer>
            <img src={MeditionWomanImage2} alt="Woman Meditating" />
            <TextBoxInfo>
              Você recebe um box por mês.
              <br /> <br />
              Ideal para quem está começando agora.
            </TextBoxInfo>
            <ButtonBoxInfo>Assinar</ButtonBoxInfo>
          </BoxInfoContainer>
        </Carousel>
      </PlansContainer>
    </MainContainer>
  );
}

const ButtonBoxInfo = styled(Button)`
  height: 39px;
  width: 168px;
  margin: 15px auto;
  @media (max-width: 355px) {
    height: 30px;
    width: 140px;
    margin: 5px auto 0px auto;
  }
`;

const TextBoxInfo = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #4d65a8;
  text-align: left;
  padding: 20px;
  @media (max-width: 355px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const BoxInfoContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 400px;
  max-height: 399px;
  background-color: #e5cdb3;
  border-radius: 25px;
  @media (max-width: 355px) {
    height: 300px;
  }
`;

const PlansContainer = styled.div`
  margin: 0 15px;
`;

const TitlePlans = styled(Title)`
  text-align: left;
`;

const SubTitlePlans = styled(SubTitle)`
  text-align: left;
`;
