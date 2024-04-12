import React from "react";

import "./Wrapper.scss";

export const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="content">{children}</div>
    </div>
  );
};
