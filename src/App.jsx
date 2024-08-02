import React from "react";
import { useSelector } from "react-redux";
import Cart from "./components/cart/cart";
import DessertStore from "./components/store/dessertStore";
import Modal from "./components/modal/orderConfirmed";
import styled from "styled-components";
import colors from "./styles/colors";

const StyledApp = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.rose[50]};
  padding: 6.25rem;
  gap: 2rem;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    padding: 2rem;
    height: 100%;
  }
`;

function App() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {cart.orderConfirmed && <Modal />}
      <StyledApp>
        <DessertStore />
        <Cart />
      </StyledApp>
    </>
  );
}

export default App;
