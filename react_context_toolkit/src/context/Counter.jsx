import { createContext, useContext, useState } from 'react';

// 1. create context
const CounterContext = createContext();
// 3. create custom hooks for consume contex
export const useCounterContext = () => useContext(CounterContext);

//

// 2. Provide context
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
