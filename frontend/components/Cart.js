import React from "react";
import CartStyles from "./styles/CartStyles";
import Supreme from "./styles/Supreme";
import CloseButton from "./styles/CloseButton";
import AwesomeButton from "./styles/AwesomeButton";

const Cart = () => {
  return (
    <CartStyles open>
      <header>
        <CloseButton title="close">&times;</CloseButton>
        <Supreme>Your cart</Supreme>
        <p>You have __ Items in your cart</p>
      </header>
      <footer>
        <p>$10.50</p>
        <AwesomeButton>Checkout</AwesomeButton>
      </footer>
    </CartStyles>
  );
};

export default Cart;
