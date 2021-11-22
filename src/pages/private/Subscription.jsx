/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
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
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  dayjs.extend(weekday);

  useEffect(() => {
    getSubscription(user.token)
      .then((res) => {
        setSubscription(res.data);
      })
      .catch((err) => err.response?.status === 401 && navigate("/sign-in"));
  }, []);

  function getNextDate(day, n) {
    let result = dayjs();
    if (day === "Segunda") {
      result = result.weekday(1 + 7 * n);
    } else if (day === "Quarta") {
      result = result.weekday(3 + 7 * n);
    } else if (day === "Sexta") {
      result = result.weekday(5 + 7 * n);
    } else if (day === "1"){
      result = result.weekday(5 + 7 * n);
    }
    return result.format("DD/MM/YYYY");
  }

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
            </TextBoxInfo>
            <TextBoxInfo>
              Data da assinatura:{" "}
              <span>{dayjs(subscription.created_at).format("DD/MM/YYYY")}</span>
            </TextBoxInfo>
            <TextBoxInfo>
              Próximas entregas:
              <br />
            </TextBoxInfo>
            <DeliveryDate>{getNextDate(subscription.day, 0)}</DeliveryDate>
            <DeliveryDate>{getNextDate(subscription.day, 1)}</DeliveryDate>
            <DeliveryDate>{getNextDate(subscription.day, 2)}</DeliveryDate>
            <ContainerOptions>
              {subscription.receiving_options.map((option) => (
                <span key={Math.random()}>{option.option_name}</span>
              ))}
            </ContainerOptions>
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

const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 25px;
  margin-top: 20px;
  font-size: 16px;
  color: #e63c80;
`;

const DeliveryDate = styled.p`
  margin: 5px 45px;
  font-size: 14px;
  font-weight: bold;
  color: #e63c80;
`;

const LoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBoxInfo = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #4d65a8;
  text-align: left;
  margin: 5px 15px;
  span {
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
  max-height: 400px;
  background-color: #fff;
  border-radius: 25px;
  padding-bottom: 15px;
  @media (max-width: 355px) {
    height: 300px;
  }
  img {
    width: 100%;
    margin-bottom: 10px;
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
