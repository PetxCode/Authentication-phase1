import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import { ContextState } from "./AuthFile";

const PrivateRoute = ({ component: PropsComonent, ...rest }) => {
  const { myUser } = useContext(ContextState);
  return (
    <Route
      {...rest}
      render={(propsRoute) => {
        return !!myUser ? (
          <PropsComonent {...propsRoute} />
        ) : (
          <div>
            <center>Sign to view this Page</center>
            <Redirect to="/login" />
          </div>
        );
      }}
    />
  );
};

export default PrivateRoute;
