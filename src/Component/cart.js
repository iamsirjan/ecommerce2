import React, { forwardRef } from "react";
import "../Style/cart.css";
import { useStateValue } from "./StateProvider";

const Cart = forwardRef(
  ({ id, title, image, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",

        id: id,
      });
    };

    return (
      <div ref={ref} className="cart">
        <img className="cart__image" src={image} alt="" />

        <div className="cart__info">
          <p className="cart__title">{title}</p>

          <p className="cart__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default Cart;
