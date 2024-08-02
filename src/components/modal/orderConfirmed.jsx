import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { newOrder } from "../../redux/reducers/cartSlice";
import StyledModal from "./modalStyling";

import { IoCheckmarkCircleOutline as Check } from "react-icons/io5";

function Modal() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleNewOrder = (item) => {
    dispatch(newOrder());
   };

  return (
    <StyledModal>
      <article>
        <span className="confirmed-header">
          <i>
            <Check className="icon" />
          </i>
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </span>
        <section className="order-overview">
          <ul className="cart-list">
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <span className="img-and-details">
                    <img src={item.image} alt={`image of ${item.image}`} />
                    <section className="list-details">
                      <h5 className="list-name">{item.name}</h5>
                      <span>
                        <p className="item-count">x{item.count}</p>
                        <p className="base-price">@ {item.price}</p>
                      </span>
                    </section>
                  </span>
                  <p className="total-price">${item.price * item.count}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <button className="new-order-btn" onClick={handleNewOrder}>
          Start New Order
        </button>
      </article>
    </StyledModal>
  );
}

export default Modal;
