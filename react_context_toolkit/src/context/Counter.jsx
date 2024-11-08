import { createContext, useContext } from 'react';

// 1. create context
const CounterContext = createContext();
// 3. create custom hooks for consume contex
export const useCounterContext = () => useContext(CounterContext);

//

// 2. Provide context
export const CounterProvider = ({ children }) => {
  return <CounterContext.Provider>{children}</CounterContext.Provider>;
};
