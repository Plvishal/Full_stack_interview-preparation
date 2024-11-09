import { createContext, useContext, useState } from 'react';

const UserCounter = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (email, password) => {
    setUser({ email, password });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserCounter.Provider value={{ user, login, logout }}>
      {children}
    </UserCounter.Provider>
  );
};

export const useUser = () => useContext(UserCounter);
