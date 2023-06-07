import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { CheckoutCart } from "../API/APICall";
import styleClass from "./Cart.module.css";

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    setItems(cartItems.map((item) => ({ ...item, quantity: 1 })));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const existingItem = items.find((item) => item.productId === product.productId);
    if (existingItem) {
      setItems(
        items.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const existingItem = items.find((item) => item.productId === product.productId);
    if (existingItem.quantity > 1) {
      setItems(
        items.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setItems(items.filter((item) => item.productId !== product.productId));
    }
  };

  const handleCheckout = () => {
    const cartHeader = {
      cartHeaderId: 0,
      userId: null,
    };
  
    const cartDetails = items.map((item) => ({
      cartDetailsId: 0,
      cartHeaderId: 0,
      cartHeader: cartHeader,
      productId: item.productId,
      product: {
        productId: item.productId,
        productName: item.productName,
        price: item.price,
        productDescription: item.productDescription,
        productCategory: item.productCategory,
        productImageUrl: item.productImageUrl,
      },
      count: item.quantity,
    }));
  
    const checkoutHeader = {
      cartHeaderId: 0,
      userId: null,
      orderTotal: totalPrice.toFixed(2),
      firstName: firstName,
      lastName: lastName,
      phoneNumber: null,
      email: email,
      cardNumber: null,
      cvv: null,
      cartTotalItems: items.length,
      dateTime: dateTime,
      cartDetails: cartDetails,
    };
  
    //console.log(checkoutHeader);
    CheckoutCart(checkoutHeader);
  };
  
  

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
    <div className={styleClass.container}>
      <div className={styleClass.cartItems}>
        {items.map((item, index) => (
          <CartItem
            key={`${item.productId}-${index}`}
            item={item}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
        <div className={styleClass.totalPrice}>
        <h3>Total Price</h3> ${totalPrice.toFixed(2)}
      </div>
      </div>

      <div className={styleClass.formContainer}>
          <div className={styleClass.formGroup}>
            <label htmlFor="firstName" className={styleClass.formLabel}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className={styleClass.formInput}
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className={styleClass.formGroup}>
            <label htmlFor="lastName" className={styleClass.formLabel}>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className={styleClass.formInput}
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className={styleClass.formGroup}>
            <label htmlFor="Email" className={styleClass.formLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styleClass.formInput}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styleClass.formGroup}>
            <label htmlFor="Date & Time" className={styleClass.formLabel}>
            Date & Time
            </label>
            <input
              type="datetime-local"
              id="datetime"
              className={styleClass.formInput}
              placeholder="Delivery time"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
            />
          </div>
          
      </div>         
    </div>
     
    <button className={styleClass.formButton} onClick={handleCheckout}>
     Proceed to Checkout
   </button>
    </>
    
  );
};

export default Cart;
