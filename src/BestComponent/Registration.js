import { Button } from "antd";
import React, { useState } from "react";
import { app } from "../base";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [toggle, setToggle] = useState(false);

  const ToggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {toggle ? (
        <div>
          <center>
            <input
              style={{ width: "300px" }}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              style={{ width: "300px" }}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <Button
              onClick={(e) => {
                app.auth().createUserWithEmailAndPassword(email, password);
              }}
            >
              Sign Up
            </Button>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <div>Already have an Account </div>
              <div
                style={{
                  marginLeft: "5px",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={ToggleState}
              >
                Sign In here{" "}
              </div>
            </div>
          </center>
        </div>
      ) : (
        <div>
          <center>
            <input
              style={{ width: "300px" }}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <br />
            <br />
            <input
              style={{ width: "300px" }}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <Button
              onClick={(e) => {
                app.auth().signInWithEmailAndPassword(email, password);
              }}
            >
              Sign Up
            </Button>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div>Don't have an Account </div>
              <div
                style={{
                  marginLeft: "5px",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={ToggleState}
              >
                Sign Up here{" "}
              </div>
            </div>
          </center>
        </div>
      )}
    </div>
  );
};

export default Registration;
