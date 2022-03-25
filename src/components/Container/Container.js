import React from "react";

function Container({ children, className = "" }) {
  const classes = "max-w-screen-xl mx-auto " + className;

  return <div className={classes}>{children}</div>;
}

export default Container;
