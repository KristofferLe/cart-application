import styled from "styled-components";
import colors from "../../styles/colors";
import { textPreset } from "../../styles/typo";

const StyledModal = styled.section`
  position: fixed;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);

  article {
    width: 100%;
    max-width: 590px;
    height: 685px;
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .icon {
    font-size: 3rem;
    color: green;
  }

  .confirmed-header {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;

    h2 {
      font-size: 2.5rem;
      color: ${colors.rose[900]};
    }

    p {
      color: ${colors.rose[500]};
      font-weight: 500;
    }
  }

  .new-order-btn {
    width: 100%;
    margin-top: auto;
    padding: 1rem;
    border: none;
    border-radius: 2rem;
    background-color: ${colors.red};
    color: ${colors.rose[50]};
    font-size: ${textPreset[3].fontSize};
    font-weight: ${textPreset[4.1].fontWeight};
    cursor: pointer;
  }

  .order-overview {
    padding: 2rem;
    background-color: ${colors.rose[100]};
    margin-top: 1rem;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;

        span {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .list-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    }

    img {
      width: 48px;
      height: 48px;
    }
  }

  .list-name {
    color: ${colors.rose[900]};
  }

  .item-count {
    color: ${colors.red};
    font-weight: ${textPreset[4.1].fontWeight};
  }

  .base-price {
    color: ${colors.rose[900]};
  }

  .total-price {
    color: ${colors.rose[900]};
  }
`;

export default StyledModal;
