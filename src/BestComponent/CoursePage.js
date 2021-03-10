import React, { useContext } from "react";
import { ContextState } from "./AuthFile";

const CoursePage = () => {
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
      </center>
    </div>
  );
};

export default CoursePage;
