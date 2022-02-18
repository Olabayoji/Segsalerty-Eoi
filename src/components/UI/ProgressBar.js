import React from "react";

const ProgressBar = (props) => {
  const Parentdiv = {
    height: "10px",
    width: "100%",
    margin: "auto",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    marginTop: 50,
  };

  const Childdiv = {
    height: "100%",
    width: `${props.progress}%`,
    backgroundColor: "#699CFD",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}></span>
      </div>
      <p>{props.level} of 6 </p>
    </div>
  );
};

export default ProgressBar;
