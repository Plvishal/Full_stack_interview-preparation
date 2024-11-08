import { createContext } from 'react';

// 1. create context
const CounterContext = createContext();

// 

// 2. Provide context
export const CounterProvider = ({ children }) => {
  return <CounterContext.Provider>{children}</CounterContext.Provider>;
};
