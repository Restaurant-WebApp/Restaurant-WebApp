import React from "react";
import CartItem from "../components/CartItem";

const Cart = ({ cartItems }) => {
  return (
    <>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.productId} item={item} />
        ))}
      </div>
    </>

    
  );
};

export default Cart;
