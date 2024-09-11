import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ChosenLinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [selectedNavLink, setSelectedNavLink] = useState("");

  return (
    <ChosenLinkContext.Provider value={{ selectedNavLink, setSelectedNavLink }}>
      {children}
    </ChosenLinkContext.Provider>
  );
};

LinkProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a valid React node
};
