import { Button } from "antd";
import React, { useContext } from "react";
import { app } from "../base";
import { ContextState } from "./AuthFile";

const HomeDesign = () => {
  const { myUser } = useContext(ContextState);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <center>This is Home Screen</center>
      <br />
      <br />
      <br />
      <center>
        <h3>Welcome: {myUser && myUser.email} </h3>
        <br />
        <br />
        <br />

        <Button
          type="primary"
          onClick={(e) => {
            app.auth().signOut();
          }}
        >
          Sign Out
        </Button>
      </center>
    </div>
  );
};

export default HomeDesign;
