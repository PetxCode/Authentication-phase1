import React, { useContext } from "react";
import { ContextState } from "./AuthFile";

const StudyPage = () => {
  const { myUser } = useContext(ContextState);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2> Welcome {myUser && myUser.email} to your Registered Courses</h2>
        <h3>and Study plan structure</h3>
      </center>
    </div>
  );
};

export default StudyPage;
