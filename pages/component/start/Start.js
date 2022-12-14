import React from "react";
import stylesStart from "../../../styles/Start.module.css";

const Start = () => {
  return (
    <>
      <div className={stylesStart.container}>
        <h5>Hello Aditya, please select the option you need our help with: </h5>
        <ol>
          <li>Request Video Lectures</li>
          <li>Request Test Results</li>
          <li>Give Teacher Feedback</li>
          <li>Doubt Solving</li>
          <li>Student Information</li>
        </ol>
      </div>
    </>
  );
};

export default Start;
