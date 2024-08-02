import styled from "styled-components";
import colors from "../../styles/colors";
import { textPreset } from "../../styles/typo";

const StyledCart = styled.section`
  width: 100%;
  max-width: 24rem;
  min-height: 33.875rem;
  margin-bottom: auto;
  padding: 1.5rem;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1250px) {
    max-width: 50rem;
    align-items: center;
    transform: translateY(-5rem);
  }

  @media screen and (max-width: 850px) {
    transform: translateY(5rem);
  }

  .cart-header {
    color: ${colors.red};
    font-size: ${textPreset[2].fontSize};
    margin-bottom: 1.5rem;
    @media screen and (max-width: 1250px) {
      align-self: start;
    }
  }

  .empty-cart-img {
    width: 20.8675rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .empty-cart-text {
    text-align: center;
    color: ${colors.rose[500]};
    font-size: ${textPreset[3].fontSize};
    font-weight: ${textPreset[4.1].fontWeight};
  }

  .cart-list {
    list-style: none;
    display: grid;
    @media screen and (max-width: 1250px) {
      justify-items: start;
      width: 100%;
    }
  }

  li {
    border-bottom: solid 1px ${colors.rose[300]};
    width: 336px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (max-width: 1250px) {
      width: 100%;
    }
  }

  .list-details,
  span {
    display: flex;
    justify-content: space-between;
  }

  span {
    gap: 1rem;
  }

  .list-name {
    color: ${colors.rose[900]};
    font-size: ${textPreset[3].fontSize};
  }

  .item-count {
    color: ${colors.red};
    font-weight: ${textPreset[4.1].fontWeight};
  }

  .base-price {
    color: ${colors.rose[500]};
  }

  .total-price {
    color: ${colors.rose[900]};
  }

  .list-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: ${colors.rose[500]};
    transform: translateY(-15px);
  }

  .cart-total {
    padding: 1rem 0;
    margin-top: auto;
    @media screen and (max-width: 1250px) {
      width: 100%;
    }
  }

  .eco-message {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 5px;
    text-align: center;
    background-color: ${colors.rose[50]};
    padding: 1rem;
    width: 100%;
    border-radius: 0.5rem;
  }

  .confirm-order {
    padding: 1rem;
    margin-top: 1rem;
    border: none;
    border-radius: 2rem;

    width: 100%;
    background-color: ${colors.red};
    color: ${colors.rose[50]};
    font-size: ${textPreset[3].fontSize};
    font-weight: ${textPreset[4.1].fontWeight};
    cursor: pointer;
    &:hover {
      opacity: 90%;
    }
    &:active {
      background-color: ${colors.rose[50]};
    }
    transition: all 0.3s ease-in;
  }
`;

export default StyledCart;
