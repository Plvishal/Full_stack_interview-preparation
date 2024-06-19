import React from 'react';
import { useCart } from '../context/Cart';

function Cart(props) {
  const { setItems } = useCart();
  return (
    <div>
      <h1>Name: {props.title}</h1>
      <h4>Price: {props.price}</h4>
      <button
        onClick={() =>
          setItems((prev) => [
            ...prev,
            { title: props.title, price: props.price },
          ])
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default Cart;
