import React from "react";
import PropTypes from "prop-types";

function Paper({ children }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
}

// Define prop types
Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
