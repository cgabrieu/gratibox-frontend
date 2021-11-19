/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  const authContextValue = useMemo(() => ({ setUser, logout, user }), []);

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
