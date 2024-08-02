import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderConfirmed } from "../../redux/reducers/cartSlice";
import StyledCart from "./styledCart";
import emptyCartImg from "/images/emptyCart.svg";
import treeImg from "/images/tree.svg";

export default function Cart() {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch(); // Add this line to get access to dispatch

  const [emptyCart, setEmptyCart] = useState(true);

  useEffect(() => {
    setEmptyCart(items.length === 0);
  }, [items]); // Use `items` as dependency here

  const totalItemCount = items.reduce((sum, item) => sum + item.count, 0);

  const confirmOrder = () => {
    dispatch(orderConfirmed(true)); // Correct dispatch usage
  };

  return (
    <StyledCart>
      <h2 className="cart-header">
        Your Cart {items.length === 0 ? "(0)" : `(${totalItemCount})`}
      </h2>
      {items.length === 0 ? (
        <>
          <img
            className="empty-cart-img"
            src={emptyCartImg}
            alt="image of two cakes"
          />
          <p className="empty-cart-text">Your added items will appear here</p>
        </>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {" "}
                  {/* Add a key prop to each item */}
                  <h5 className="list-name">{item.name}</h5>
                  <section className="list-details">
                    <span>
                      <p className="item-count">x{item.count}</p>
                      <p className="base-price">@ {item.price}</p>
                      <p className="total-price">${item.price * item.count}</p>
                    </span>
                  </section>
                </li>
              );
            })}
          </ul>
          <span className="cart-total">
            <p>Order Total:</p> <h3> ${total.toFixed(2)}</h3>
          </span>
          <article className="eco-message">
            <img src={treeImg} alt="icon of a tree" /> This is a
            <strong> carbon-neutral </strong>
            Delivery
          </article>
          <button className="confirm-order" onClick={confirmOrder}>
            Confirm Order
          </button>
        </>
      )}
    </StyledCart>
  );
}
