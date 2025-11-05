import React, { createContext, useContext } from "react";

export const AuthContextList = createContext({});

export const AuthProviderList = ({ children }: any) => {
  return (
    <AuthContextList.Provider value={{}}>
      {children}
    </AuthContextList.Provider>
  );
};

export const useAuthList = () => useContext(AuthContextList);
