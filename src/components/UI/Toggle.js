import React from "react";
import classes from "./Toggle.module.css";

const Toggle = ({ label }) => {
  return (
    <div className={classes.container}>
      <div className={classes["toggle-switch"]}>
        <input
          type="checkbox"
          className={classes.checkbox}
          name={label}
          id={label}
        />
        <label className={classes.label} htmlFor={label}>
          <span className={classes.inner} />
          <span className={classes.switch} />
        </label>
      </div>
      {label}{" "}
    </div>
  );
};

export default Toggle;
