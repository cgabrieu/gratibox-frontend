/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import MainContainer from "../../components/MainContainer";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { useAuth } from "../../contexts/AuthContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MeditionWomanImage from "../../assets/images/woman-subscribe.png";
import Button from "../../components/Button";
import DropdownPlans from "../../components/DropdownPlans";

export default function SubscribePlan() {
  const { user } = useAuth();

  const [plan, setPlan] = useState(useLocation().state);
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
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          >
            <>
              <DropdownPlans name="Plano">
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
              </DropdownPlans>
              <DropdownPlans open name="Entrega">
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
                        onClick={() => setDay("1")}
                        isChecked={day === "1"}
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
              </DropdownPlans>
              <DropdownPlans name="Quero receber">
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
              </DropdownPlans>
            </>
            <>
              <InputAddress placeholder="Nome completo" />
              <InputAddress placeholder="Endereço de entrega" />
              <InputAddress placeholder="CEP" />
              <LastFormContainer>
                <LastInputAddress placeholder="Cidade" />
                <div>
                  <DropdownState
                    options={[
                      { value: "AC", label: "Acre" },
                      { value: "AL", label: "Alagoas" },
                      { value: "AP", label: "Amapá" },
                      { value: "AM", label: "Amazonas" },
                      { value: "BA", label: "Bahia" },
                      { value: "CE", label: "Ceará" },
                      { value: "DF", label: "Distrito Federal" },
                      { value: "ES", label: "Espirito Santo" },
                      { value: "GO", label: "Goiás" },
                      { value: "MA", label: "Maranhão" },
                      { value: "MS", label: "Mato Grosso do Sul" },
                      { value: "MT", label: "Mato Grosso" },
                      { value: "MG", label: "Minas Gerais" },
                      { value: "PA", label: "Pará" },
                      { value: "PB", label: "Paraíba" },
                      { value: "PR", label: "Paraná" },
                      { value: "PE", label: "Pernambuco" },
                      { value: "PI", label: "Piauí" },
                      { value: "RJ", label: "Rio de Janeiro" },
                      { value: "RN", label: "Rio Grande do Norte" },
                      { value: "RS", label: "Rio Grande do Sul" },
                      { value: "RO", label: "Rondônia" },
                      { value: "RR", label: "Roraima" },
                      { value: "SC", label: "Santa Catarina" },
                      { value: "SP", label: "São Paulo" },
                      { value: "SE", label: "Sergipe" },
                      { value: "TO", label: "Tocantins" },
                    ]}
                    placeholder="Estado"
                  />
                </div>
              </LastFormContainer>
            </>
          </Carousel>
        </BoxInfoContainer>
        <ButtonBoxInfo>Próximo</ButtonBoxInfo>
      </PlansContainer>
    </MainContainer>
  );
}

const DropdownState = styled(Dropdown)`
  background: rgba(224, 209, 237, 0.62);
  height: 44px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #4d65a8;
`;

const LastFormContainer = styled.div`
  display: flex;
  width: 290px;
  margin: 0 auto;
`;

const InputAddress = styled.input`
  background: rgba(224, 209, 237, 0.62);
  border-radius: 5px;
  width: 290px;
  height: 44px;
  border: none;
  outline: none;
  margin-bottom: 7px;
  padding-left: 15px;
  font-weight: bold;
  font-size: 16px;
  color: #4a30a1;
  &::placeholder {
    color: #4d65a8;
  }
`;

const LastInputAddress = styled(InputAddress)`
  width: 60%;
  margin-right: 10px;
`;

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
