/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";
import MainContainer from "../../components/MainContainer";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { useAuth } from "../../contexts/AuthContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MeditionWomanImage from "../../assets/images/woman-subscribe.png";
import Button from "../../components/Button";
import { getSubscription } from "../../services/api/api";

export default function Subscription() {
  const { user } = useAuth();

  const [subscription, setSubscription] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getSubscription(user.token).then((res) => {
      setSubscription(res.data);
    });
  }, []);

  return (
    <MainContainer paddingTop="15%">
      <PlansContainer>
        <TitlePlans>Bom te ver por aqui, {user.name.split(" ")[0]}.</TitlePlans>
        <SubTitlePlans>“Agradecer é arte de atrair coisas boas”</SubTitlePlans>
        {subscription !== null ? (
          <BoxInfoContainer>
            <img src={MeditionWomanImage} alt="Woman Meditating" />
            <TextBoxInfo>
              Plano:{" "}
              <span>
                {subscription.plan_type === "Monthly" ? "Mensal" : "Semanal"}
              </span>
              Data da assinatura:{" "}
              <span>
                {subscription.plan_type === "Monthly" ? "Mensal" : "Semanal"}
              </span>
            </TextBoxInfo>
          </BoxInfoContainer>
        ) : (
          <LoaderContainer>
            <Loader type="Oval" color="#fff" height={50} width={50} />
          </LoaderContainer>
        )}
      </PlansContainer>
    </MainContainer>
  );
}

const LoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBoxInfo = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #4d65a8;
  line-height: 20px;
  text-align: left;
  padding: 20px;

  > span {
    font-size: 14px;
    color: #e63c80;
  }

  @media (max-width: 355px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const BoxInfoContainer = styled.div`
  width: 100%;
  height: 400px;
  max-height: 399px;
  background-color: #fff;
  border-radius: 25px;
  @media (max-width: 355px) {
    height: 300px;
  }
  > img {
    width: 100%;
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
