// Product.jsx
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/reducers/cartSlice";
import colors from "../../styles/colors";
import { textPreset } from "../../styles/typo";
import AddToCartButton from "../buttons/addToCart/addToCartButton";

const StyledProduct = styled.article`
  position: relative;
  height: 15rem;
  width: 15.625rem;
  border: solid 1px transparent;

  .product-img {
    border: solid 2px ${colors.rose[50]};
  }

  .product-info {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .product-type {
    color: ${colors.rose[500]};
    font-size: ${textPreset[4].fontSize};
    font-weight: ${textPreset[4].fontWeight};
    letter-spacing: ${textPreset[4].letterSpacing};
    line-height: ${textPreset[4].lineHeight};
  }

  .product-name {
    color: ${colors.rose[900]};
    font-size: ${textPreset[3].fontSize};
    font-weight: ${textPreset[3].fontWeight};
    letter-spacing: ${textPreset[3].letterSpacing};
    line-height: ${textPreset[3].lineHeight};
  }

  .product-price {
    color: ${colors.red};
  }

  &:hover {
    .product-img {
      border: solid 2px ${colors.red};
      border-radius: 0.625rem;
    }
  }

  @media screen and (max-width: 1250px) {
    .product-img {
      width: 100%;
      height: 213px;
    }
  }

  @media screen and (max-width: 850px) {
    width: 25rem;

    .product-img {
      object-fit: cover;
    }
  }
`;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem(product));
  };

  return (
    <StyledProduct className="product-item">
      <img className="product-img" src={product.image} alt={product.name} />
      <section className="product-info">
        <p className="product-type">{product.type}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price" value={product.price}>
          ${product.price.toFixed(2)}
        </p>
      </section>
      <AddToCartButton add={handleAddToCart} remove={handleRemoveFromCart} />
    </StyledProduct>
  );
};

export default Product;
