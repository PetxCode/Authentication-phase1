import Password from "antd/lib/input/Password";
import React, { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router";
import { app } from "../base";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const hist = useHistory();

  const [enter, setEnter] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async ({ email, password }) => {
    await app.auth().createUserWithEmailAndPassword(email, password);
    console.log("I am In");
  };

  const signOut = async () => {
    await app.auth().signOut();

    console.log("I am Out");
  };

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        signIn,
        signOut,
        currentUser,
        enter,
        email,
        password,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
