import { createContext, useContext, useState } from 'react';

// create context
export const CartContext = createContext();

// custom hooks for the consumer
export const useCart = () => useContext(CartContext);

// Create provider

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
 