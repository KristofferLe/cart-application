import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import { FiMinusCircle as Minus } from "react-icons/fi";
import { FiPlusCircle as Plus } from "react-icons/fi";
import CartIcon from "/images/cartIcon.svg";
import { useSelector } from "react-redux";

const StyledAddToCartButton = styled.section`
  position: absolute;
  bottom: -1.5rem;
  right: 50%;
  transform: translate(50%, 0);
  width: 10rem;
  height: 2.75rem;
  border: solid 1px
    ${({ $added }) => ($added ? "transparent" : colors.rose[500])};
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: ${({ $added }) => ($added ? "space-around" : "center")};
  gap: 0.5rem;
  background-color: ${({ $added }) => ($added ? colors.red : colors.rose[50])};
  color: ${({ $added }) => ($added ? "white" : colors.rose[900])};
  cursor: pointer;
  transition: color 0.5s ease;

  .icon {
    font-size: 1.3rem;
  }

  &:hover {
    border: solid 1px ${colors.red};
    color: ${({ $added }) => ($added ? "white" : colors.red)};
  }

  @media screen and (max-width: 1250px) {
    bottom: 0.8rem;
    left: -50px;
  }

  @media screen and (max-width: 850px) {
    bottom: 0.8rem;
    left: 40px;
  }
`;

function AddToCartButton({ add, remove }) {
  const [$added, setAdded] = useState(false);
  const [count, setCount] = useState(0);
  const isNewOrder = useSelector((state) => state.cart.newOrder); // Assuming `newOrder` is in the state

  const handleClick = () => {
    setAdded(true);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count === 0) return;
    setCount((prevCount) => (prevCount -= 1));
  };

  useEffect(() => {
    setAdded(count > 0);
    if (isNewOrder) {
      setCount(0);
      setAdded(false);
    }
  }, [count]);

  return (
    <StyledAddToCartButton onClick={handleClick} $added={$added}>
      {$added ? (
        <>
          <Minus
            className="icon"
            onClick={() => {
              decrement();
              remove();
            }}
          />
          <p>{count}</p>
          <Plus
            className="icon"
            onClick={() => {
              increment();
              add();
            }}
          />
        </>
      ) : (
        <>
          <img src={CartIcon} alt="image of an cart (icon)" />
          <p>Add to Cart</p>
        </>
      )}
    </StyledAddToCartButton>
  );
}

export default AddToCartButton;
