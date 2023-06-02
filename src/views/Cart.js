import React from "react";
import CartItem from "../components/CartItem";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h1>Items in Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.productId} item={item} />
      ))}
    </div>
  );
};

export default Cart;
