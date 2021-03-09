import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./Auth";

const AuthHome = () => {
  const { signOut, currentUser } = useContext(AppContext);
  return (
    <div>
      <center>This is Home Page</center>
      <br />
      <br />

      <center>You are welcome {currentUser && currentUser.email}</center>
      <br />
      <br />
      <br />
      <center>
        <Button onClick={signOut}>
          <Link to="/login">Auth Out</Link>
        </Button>
      </center>
    </div>
  );
};

export default AuthHome;
