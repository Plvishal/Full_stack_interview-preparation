import { createContext, useContext, useState } from 'react';
// create context
export const CounterContext = createContext();
// create custom hooks for consumer

export const useCounter = () => useContext(CounterContext);

// provide the context
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
