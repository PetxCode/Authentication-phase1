import React, { createContext, useEffect } from "react";
import { app } from "../base";

export const ContextState = createContext();

export const ProviderState = ({ children }) => {
  const [myUser, setMyUser] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setMyUser(user);
    });
  });
  return (
    <ContextState.Provider value={{ myUser }}>{children}</ContextState.Provider>
  );
};
