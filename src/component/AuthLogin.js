import { Button } from "antd";
import React, { useContext, useState } from "react";
import { AppContext } from "./Auth";
import { app } from "../base";
import { Link, withRouter } from "react-router-dom";
const AuthLogin = () => {
  const { signIn } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <center>This is Login Page</center>
      <br />
      <br />
      <center>Sign In the enter our Packages</center>
      <br />
      <br />
      <br />
      <center>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </center>
      <center>
        <Button
          onClick={async () => {
            await app.auth().createUserWithEmailAndPassword(email, password);
            // signIn((email = { email }), (password = { password }));
          }}
        >
          <Link to="/">Auth in</Link>
        </Button>
      </center>
    </div>
  );
};

export default withRouter(AuthLogin);
