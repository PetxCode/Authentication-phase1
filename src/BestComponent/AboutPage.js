import React, { useContext } from "react";
import { ContextState } from "./AuthFile";

const AboutPage = () => {
  const { myUser } = useContext(ContextState);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2> Welcome The About Page</h2>
      </center>
    </div>
  );
};

export default AboutPage;
