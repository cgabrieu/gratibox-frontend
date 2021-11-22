/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import cep from "cep-promise";
import { Animate } from "react-simple-animate";
import Loader from "react-loader-spinner";
import MainContainer from "../../components/MainContainer";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { useAuth } from "../../contexts/AuthContext";
import MeditionWomanImage from "../../assets/images/woman-subscribe.png";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import ErrorMessage from "../../components/ErrorMessage";
import { postSubscription } from "../../services/api/api";

export default function SubscribePlan() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [plan, setPlan] = useState(useLocation().state);
  const [day, setDay] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectSection, setSelectSection] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [address, setAddress] = useState({
    name: "",
    address: "",
    cep: "",
    city: "",
    state: "",
  });

  function handleShowErrorMessage(msg) {
    setErrorMessage(msg);
    setShowErrorMessage(true);
    setTimeout(() => setShowErrorMessage(false), 3000);
  }

  function onChangeCheck(product) {
    setProducts([...products, product]);
    if (products.includes(product)) {
      setProducts(products.filter((item) => item !== product));
    }
  }

  function handleGetAddress() {
    cep(address.cep).then((res) => {
      setAddress({
        ...address,
        address: `${res.street}, ${res.neighborhood}`,
        city: res.city,
        state: res.state,
      });
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (address.name.length < 5) {
      handleShowErrorMessage("Insira um nome válido");
      return;
    }
    if (address.cep.length !== 9) {
      handleShowErrorMessage("Insira um cep válido");
      return;
    }
    if (address.address.length < 3) {
      handleShowErrorMessage("Insira um endereço válido");
      return;
    }
    if (address.city.length < 2) {
      handleShowErrorMessage("Insira uma cidade válida");
      return;
    }
    if (address.state.length !== 2) {
      handleShowErrorMessage("Insira um estado válido (sigla)");
      return;
    }
    setIsLoading(true);
    const receivingOptions = products.map((product) => ({
        option_name: product,
      }));
    postSubscription(plan, day, receivingOptions, address, user.token)
      .then(() => {
        navigate('/subscription');
        setIsLoading(false);
      })
      .catch(() => {
        handleShowErrorMessage("Não foi possível assinar o serviço, talvez vocẽ já possua uma assinatura.");
        setIsLoading(false);
      })
      
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
            emulateTouch
            selectedItem={selectSection}
          >
            <>
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
              <Dropdown open name="Entrega">
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
            </>
            <>
              <InputAddress
                placeholder="Nome completo"
                value={address.name}
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
              />
              <InputAddress
                placeholder="Endereço de entrega"
                value={address.address}
                onChange={(e) =>
                  setAddress({ ...address, address: e.target.value })
                }
              />
              <InputAddress
                placeholder="CEP"
                value={address.cep}
                onChange={(e) =>
                  setAddress({ ...address, cep: e.target.value })
                }
                onKeyPress={(e) => e.key === "Enter" && handleGetAddress()}
              />
              <LastFormContainer>
                <LastInputAddress
                  placeholder="Cidade"
                  value={address.city}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                />
                <div>
                  <LastInputAddress
                    placeholder="Estado"
                    value={address.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                  />
                </div>
              </LastFormContainer>
            </>
          </Carousel>
        </BoxInfoContainer>
        <Animate
            play={showErrorMessage}
            start={{ opacity: 0 }} end={{ opacity: 1 }}
          >
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </Animate>
        {selectSection === 0 ? (
          <ButtonBoxInfo onClick={() => {
            if (!day) {
              handleShowErrorMessage("Defina o dia para receber sua box");
              return;
            }
            if (!products.length) {
              handleShowErrorMessage("Escolha pelo menos um produto");
              return;
            }
            setSelectSection(1);
          }}>
            Próximo
          </ButtonBoxInfo>
        ) : (
          <ButtonBoxInfo onClick={handleSubmit}>
            {isLoading ? (
              <Loader type="TailSpin" color="#fff" height={30} width={30} />
            ) : (
              "Finalizar"
            )}
          </ButtonBoxInfo>
        )}
      </PlansContainer>
    </MainContainer>
  );
}

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
  &:first-child {
    width: 100%;
    margin-right: 10px;
  }
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
