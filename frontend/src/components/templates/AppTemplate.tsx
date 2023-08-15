import React from "react";
import Navigation from "../organisms/Navigation/Navigation";

const AppTemplate = ({ children }) => {
  return (
    <div>
      {children}
      <Navigation />
    </div>
  );
};

export default AppTemplate;
