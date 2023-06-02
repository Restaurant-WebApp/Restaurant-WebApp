import React from "react";

const CartItem = ({ item }) => {
    return (
      <div className="cart-item">
        <img src={item.productImageUrl} alt={item.productName} />
        <div>
          <h3>{item.productName}</h3>
          <p>${item.price}</p>
        </div>
      </div>
    );
  };

export default CartItem;
