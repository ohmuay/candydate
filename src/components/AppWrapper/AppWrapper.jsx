import React from "react";

function AppWrapper({ children }) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

export default AppWrapper;
