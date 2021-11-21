/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "../../components/MainContainer";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { useAuth } from "../../contexts/AuthContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MeditionWomanImage from "../../assets/images/woman-subscribe.png";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";

export default function SubscribePlan() {
  const { user } = useAuth();

  const [plan, setPlan] = useState("Monthly");
  const [day, setDay] = useState(null);
  const [products, setProducts] = useState([]);

  function onChangeCheck(product) {
    setProducts([...products, product]);
    if (products.includes(product)) {
      setProducts(products.filter((item) => item !== product));
    }
  }

  return (
    <MainContainer paddingTop="15%">
      <PlansContainer>
        <TitlePlans>Bom te ver por aqui, {user.name.split(" ")[0]}.</TitlePlans>
        <SubTitlePlans>“Agradecer é arte de atrair coisas boas”</SubTitlePlans>
        <BoxInfoContainer>
          <img src={MeditionWomanImage} alt="Woman Meditating" />
          <Dropdown name="Plano">
            <div>
              <Checkbox
                onClick={() => setPlan("Weekly")}
                isChecked={plan === "Weekly"}
              />
              <p>Semanal</p>
            </div>
            <div>
              <Checkbox
                onClick={() => setPlan("Monthly")}
                isChecked={plan === "Monthly"}
              />
              <p>Mensal</p>
            </div>
          </Dropdown>
          <Dropdown name="Entrega">
            {plan === "Weekly" ? (
              <>
                <div>
                  <Checkbox
                    onClick={() => setDay("Segunda")}
                    isChecked={day === "Segunda"}
                  />
                  <p>Segunda</p>
                </div>
                <div>
                  <Checkbox
                    onClick={() => setDay("Quarta")}
                    isChecked={day === "Quarta"}
                  />
                  <p>Quarta</p>
                </div>
                <div>
                  <Checkbox
                    onClick={() => setDay("Sexta")}
                    isChecked={day === "Sexta"}
                  />
                  <p>Sexta</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Checkbox
                    onClick={() => setDay("01")}
                    isChecked={day === "01"}
                  />
                  <p>Dia 01</p>
                </div>
                <div>
                  <Checkbox
                    onClick={() => setDay("10")}
                    isChecked={day === "10"}
                  />
                  <p>Dia 10</p>
                </div>
                <div>
                  <Checkbox
                    onClick={() => setDay("20")}
                    isChecked={day === "20"}
                  />
                  <p>Dia 20</p>
                </div>
              </>
            )}
          </Dropdown>
          <Dropdown name="Quero receber">
            <div>
              <Checkbox
                onClick={() => onChangeCheck("Chás")}
                isChecked={products.includes("Chás")}
              />
              <span className="checkmark" />
              <p>Chás</p>
            </div>
            <div>
              <Checkbox
                onClick={() => onChangeCheck("Incensos")}
                isChecked={products.includes("Incensos")}
              />
              <p>Incensos</p>
            </div>
            <div>
              <Checkbox
                onClick={() => onChangeCheck("Produtos Orgânicos")}
                isChecked={products.includes("Produtos Orgânicos")}
              />
              <p>Produtos Orgânicos</p>
            </div>
          </Dropdown>
        </BoxInfoContainer>
        <ButtonBoxInfo>Próximo</ButtonBoxInfo>
      </PlansContainer>
    </MainContainer>
  );
}

const Checkbox = styled.span`
  width: 17px;
  height: 17px;
  background-color: white;
  border: 2px white solid;
  background-color: ${({ isChecked }) => isChecked && "#4D65A8"};
  margin-right: 5px;
`;

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

const BoxInfoContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  background-color: #fff;
  border-radius: 25px;
  padding-bottom: 5px;
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
