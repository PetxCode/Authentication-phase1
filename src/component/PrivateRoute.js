import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "./Auth";

const PrivateRoute = ({ component: PropComponent, ...rest }) => {
  const { currentUser } = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={(propRoute) => {
        return currentUser ? (
          <PropComponent {...propRoute} />
        ) : (
          <Redirect to={"/login"} />
        );
      }}
    />
  );
};

export default PrivateRoute;
